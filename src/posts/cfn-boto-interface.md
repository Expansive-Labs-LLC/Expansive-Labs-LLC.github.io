---
title: cfn-boto-interface
layout: post
date: "2018-04-12"
tags: [ blog, aws, boto, cloudformation, lambda ]
permalink: "/posts/cfn-boto-interface/"
authors: Derek DeJonghe
description: Lambda Function that provides a direct interface to boto3 from CloudFormation as a structured object. I often find myself writing custom resources for things that either are not yet supported by CloudFormation, or for things that seem like they will never be supported, like a lookup. Often these custom resources are just a few boto3 calls that create, update, and delete a given resource. I has started to look at spot fleets for running ECS clusters after the pricing model changed in March 2018. The EC2 Launch Template was not supported at that time and neither was the ability to use EC2 Launch Templates with a Spot Fleet built by CloudFormation. With that challenge I figured I had a couple custom resources to build and I thought about how I could abstract that as much as possible, and I think I found it. I decided to build a direct interface to boto3 through CloudFormation.
---

# [cfn-boto-interface](https://github.com/dejonghe/cfn-boto-interface)

## Note: This should no longer be used, in favor of AWS CDK.

## What is it?
Possibly the most dangerous thing I've ever written.

This is python3.6 code that is intended to run inside of AWS Lambda. The Lambda Function is intended to be used as a CloudFormation Custom Resource. This Custom Resource takes properties that describe a set of commands to run. It allows you to look up data from the event source, response objects returned by other commands, modify lookups to cast to `int` or `str`, and also interpolate random strings.

## Where is it?
GitHub: [https://github.com/dejonghe/cfn-boto-interface](https://github.com/dejonghe/cfn-boto-interface)

## Why I wrote this
I often find myself writing custom resources for things that either are not yet supported by CloudFormation, or for things that seem like they will never be supported, like a lookup. Often these custom resources are just a few boto3 calls that create, update, and delete a given resource. I has started to look at spot fleets for running ECS clusters after the pricing model changed in March 2018. The EC2 Launch Template was not supported at that time and neither was the ability to use EC2 Launch Templates with a Spot Fleet built by CloudFormation. With that challenge I figured I had a couple custom resources to build and I thought about how I could abstract that as much as possible, and I think I found it. I decided to build a direct interface to boto3 through CloudFormation.

Overall, I wrote this to aid in things such as quick lookups or utilizing new features and services before they get CloudFormation Support. It's already working out for me. I tested it on Secrets Manager with in a week of the service being available and I'm able to retrieve secrets.

## How is it used?
[The GitHub Repo](https://github.com/dejonghe/cfn-boto-interface) has more of a full rundown that includes building the zip, creating the Lambda Resource in CloudFormation, etc. You can use the pre built release package directly, as it's a Zip file containing the code, cfn-response, and boto3==1.7.4. Here I'd just like to add an example and the high level documentation of what this object is made up of.

### Example: Secret String fom Secret Manager

Note: Use GetAtt for secrets so that it doesn't show up in CFN console as PhysicalResourceId
```yaml
  SecretString:
    Type: Custom::FetchSecret
    Properties:
      # Reference to the Lambda Function that gets called
      ServiceToken: !GetAtt 'BotoInterface.Arn'
      # When a create event type is send to the lambda use this object
      Create:
        PhysicalResourceId: '!Create[0].VersionId' # Lookup and return secret when Ref'd
        ResponseData:                   # Key,Value pairs for GetAtt to use
          Secret: '!Create[0].SecretString'
        Commands:
          - Client: secretsmanager      # Boto3 client to use
            Method: get_secret_value    # method to call on the boto3.client('secretsmanager') object
            Arguments:                  # Keyword Arguments to pass to the method
              SecretId: !Ref 'SecretId'
      Update:
        Replace: 'True'                 # If an update is called just run create again,
                                        # CFN will send a delete on cleanup
```

### Custom Resource Properties

#### Top level properties
* ServiceToken: (Required) - Arn of the Lambda Resource
* Create: ActionObject, described below
* Update: ActionObject, described below
* Delete: ActionObject, described below

#### ActionObject
* PhysicalResourceId: Physical Id of this resource to return to CloudFormation for this action. Can use *Lookups*
* ResponseData: Dict of key,value pairs to return to CloudFormation for this resource for this action, for use in GetAtt. Can use *Lookups*
* Commands: Array of CommandObjects
* Replace: (Update Only) - Bool, will re run create, if a different PhysicalId is returned CloudFormation will send a Delete when Cleaning Up

#### CommandObjects
* Client: (Required) - Boto3 client name to use when creating a client example: 'ec2', or 'secretsmanager'
* Method: (Required) - Method to call on the Boto3 client
* Arguments: Dict of key,value pairs to pass to the method as keyword arguments.

#### Lookups
Lookups are denoted with a `!` prefix. The lookups traverse dict objects by use of `.` notation

* `!event`: Looks up a value in the event passed to the lambda from CloudFormation
* `!Create[]`: (Create ActionObject Only) - Looks up a value from the return of the command at that index ran in the Create ActionObject
* `!Update[]`: (Update ActionObject Only) - Looks up a value from the return of the command at that index ran in the Update ActionObject
* `!Delete[]`: (Delete ActionObject Only) - Looks up a value from the return of the command at that index ran in the Delete ActionObject

##### Modifiers
If a lookup returns a value in a type that you need to cast you can use the modifiers after the lookup notation.

* `!int`: Cast lookup to int
* `!str`: Cast lookup to str

#### Interpolation
* `!random`: Interpolates a random 4 Alpha Numeric string


## Conclusion
I was serious when I said this was dangerous, but then again it's kind of cool. I hope others find use in it. If you have issues comment here or make an issue in GitHub. I'll try to help out when I can.