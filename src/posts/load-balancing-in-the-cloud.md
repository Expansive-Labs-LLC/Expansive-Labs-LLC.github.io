---
title: Load Balancing in the Cloud
date: "2018-06-05"
tags: [ blog, nginx, books ]
permalink: "/posts/load-balancing-in-the-cloud/"
authors: Derek DeJonghe
description: "Load Balancing in the Cloud, Practical Solutions with NGINX and AWS, published by O'REILLY Free Download: [Load Balancing in the Cloud, Practical Solutions with NGINX and AWS](https://www.nginx.com/resources/library/load-balancing-in-the-cloud-aws-nlb-elb-nginx-plus/). The use of redundant servers has long been a solution for meeting sudden spikes in demand, machine failures, and outages. Cloud services greatly reduce the cost and hassle of provisioning redundant equipment and load balancers and give you the ability to deal with separate network, application, and client-side loads. But today there are many options to consider, and you have to determine which cloud service (or services) will meet your unique needs."
---

Free Download: [Load Balancing in the Cloud, Practical Solutions with NGINX and AWS](https://www.nginx.com/resources/library/load-balancing-in-the-cloud-aws-nlb-elb-nginx-plus/)

# About the Book
The use of redundant servers has long been a solution for meeting sudden spikes in demand, machine failures, and outages. Cloud services greatly reduce the cost and hassle of provisioning redundant equipment and load balancers and give you the ability to deal with separate network, application, and client-side loads. But today there are many options to consider, and you have to determine which cloud service (or services) will meet your unique needs.

With this ebook, I deliver a practical guide to load balancing services in the cloud. In this dynamic environment, where machines are frequently provisioned and decommissioned to meet user demand, you need a load balancer that can intelligently distribute traffic. This ebook walks you through the strategy via several options, including the use of the NGINX software load balancer with AWS Network Load Balancer (AWS NLB) and global load balancing with AWS’ Route 53 offering.

# Preface

This book is for engineers and technical managers looking to take advantage of the cloud in a way that requires a load balancing solution. I am using AWS as the example because it is widely used, and therefore will be the most useful to the most people. You’ll learn about load balancing in general, as well as AWS load balancers, AWS patterns, and the NGINX reverse proxy and load balancer. I’ve chosen to use NGINX as a software load balancer example because of its versatility and growing popularity. As adoption of NGINX grows, there are more people looking to learn about different ways they can apply the technology in their solutions. My goal is to help educate you on how you can craft a load balancing solution in the cloud that fits your needs without being prescriptive, but rather descriptive and informative.

I wrote this text to complement the AWS Quick Start guide to NGINX Plus. I truly believe in NGINX as a capable application delivery platform, and AWS as an industry leading cloud platform. That being said, there are other solutions to choose from, such as: Google Cloud, Microsoft Azure, Digital Ocean, IBM Cloud, their respective platform native load balancers, HAProxy, the Apache HTTP Server with the mod_proxy module, and IIS with the URL Rewrite module. As a cloud consultant, I understand that each cloud application has different load balancing needs. I hope that the information in this book helps you design a solid solution that fits your performance, security, and availability needs, while being economically reasonable.

As you read through keep your application architecture in mind. Compare and contrast the feature set you might need with the up-front and ongoing cost of building and managing the solution. Pay special attention to the automatic registration and deregistration of nodes with the load balancer. Even if you do not plan to auto scale today, it is wise to prepare with a load balancing solution that is capable of doing so to enable your future. 