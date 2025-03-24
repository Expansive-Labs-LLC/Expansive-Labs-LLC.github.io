---
layout: engineering-practice
title: Standard Operating Procedure
url: SOP
name: "SOP"
tags: SOP
body_class: base-blog
permalink: "/engineering-practice/SOP/"
---
## DevOps & Agile SOP for Self-Sovereign Identity Management (SSIM) - Trunk-Based Development

**Vision:** To drive widespread adoption of our SSIM solution by leveraging DevOps principles, Agile methodologies, and open-source contributions, while minimizing developer overhead and maximizing efficiency.

**Tooling Consolidation:** Jira, Confluence, GitHub.

**I. Agile & Task Management (Jira):**

* **Task Breakdown:**
    * User Stories: Define features from a user perspective.
    * Tasks: Break down stories into granular, estimable tasks.
    * Sub-tasks: Further divide complex tasks for clarity.
    * Each task should be estimable in story points and assigned to a single developer.
* **Jira Workflows:**
    * Standardized workflows for development, bug fixes, and support requests.
    * Use Jira Service Management for support tickets, linked to development tasks when necessary.
    * Use Jira to track and manage all work, from initial feature request through to production release.
* **Estimation & Planning:**
    * Use story points for estimation, facilitating velocity tracking and sprint planning.
    * Regular sprint planning and review meetings to ensure alignment and progress.

**II. Source Code & Package Management (GitHub) - Trunk-Based Development:**

* **Trunk-Based Development:**
    * All developers commit directly to the `main` branch.
    * Short-lived feature branches for specific tasks, merged frequently.
    * Feature flags to enable/disable incomplete features in production.
    * Emphasis on continuous integration and continuous delivery.
    * Code reviews are mandatory for all pull requests before merge to main.
* **GitHub Actions:**
    * Automate CI/CD pipelines for building, testing, and deploying code.
    * Automate package publishing to appropriate repositories (e.g., npm, Maven).
    * Automate OpenAPI-generator to create client libraries on API changes.
* **Package Management:**
    * Utilize GitHub Packages or other repositories for managing dependencies and distributing SDKs.
    * Automate the release of SDKs when new API client libraries are generated.
* **Open Source SDKs:**
    * Publish and maintain open-source SDKs generated from OpenAPI specifications.
    * Encourage community contributions and provide timely support.
    * Actively engage with the open source community, and follow W3C specifications.

**III. Automation & Integration:**

* **Jira-GitHub Integration:**
    * Automate Jira ticket status transitions based on Git actions (e.g., commit, pull request).
    * Link commits and pull requests to corresponding Jira tickets.
    * When a pull request is merged, automatically transition the related Jira ticket to "Resolved" or "Done."
    * When a branch is created that matches a Jira ticket number, automatically transition the ticket to "In Progress".
* **OpenAPI-Generator Automation:**
    * Automate the generation of API client libraries from OpenAPI specifications.
    * Integrate this process into the CI/CD pipeline.
    * Automate the publication of these libraries to package repositories.
* **Monitoring & Feedback:**
    * Implement monitoring dashboards to track build, deployment, and application performance.
    * Use Jira dashboards to monitor sprint progress and identify bottlenecks.
    * Utilize automated feedback loops to identify areas for process improvement.

**IV. Knowledge Management (Confluence):**

* **Centralized Documentation:**
    * Maintain comprehensive documentation in Confluence, including API specifications, SDK usage guides, and troubleshooting information.
    * Create a knowledge base for support requests and common issues.
    * Document all processes and procedures.
* **Collaboration & Knowledge Sharing:**
    * Encourage cross-team collaboration and knowledge sharing through Confluence.
    * Use Confluence for meeting notes, project plans, and architectural decisions.

**V. Process Improvement & Feedback:**

* **Regular Retrospectives:**
    * Conduct regular sprint retrospectives to identify areas for improvement.
    * Use Jira data and feedback to inform process changes.
* **Continuous Monitoring:**
    * Monitor key metrics related to build, deployment, and support ticket resolution.
    * Use dashboards to visualize data and identify trends.
* **Feedback Loops:**
    * Establish feedback loops with integration partners and the open-source community.
    * Use feedback to improve API design, SDK functionality, and documentation.

**VI. Benefits:**

* **Reduced Developer Overhead:** Automation of routine tasks frees up developers to focus on core product development.
* **Accelerated Development Cycles:** CI/CD pipelines and trunk-based development enable faster releases.
* **Improved Product Quality:** Automated testing and code reviews ensure high-quality code.
* **Enhanced Collaboration:** Centralized tooling and clear processes facilitate collaboration across teams.
* **Increased Community Adoption:** Open-source SDKs and active community engagement drive adoption.
* **Data-Driven Decision Making:** Monitoring and feedback loops provide actionable insights.
* **Clear and Measurable ROI:** Consolidation of tools reduces costs and increases efficiency.
* **Industry Leadership:** Contributing to open specifications and open sourcing tools positions the company as an industry leader.