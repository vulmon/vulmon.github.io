---
layout: post
title:  "Vulnerabilities Used by Stolen FireEye Tools"
date:   2020-07-22 00:00:00 +0300
categories: Vulmon Alerts
author: yavuz
tags: [vulmon, vulnerability intelligence, vulnerability, fireeye, fireeye hacked, fireye vulnerabilities, fireeye red team tools]
image: '/images/posts/fireeye_hacked.png'
---

Cybersecurity firm FireEye [disclosed](https://www.fireeye.com/blog/products-and-services/2020/12/fireeye-shares-details-of-recent-cyber-attack-actions-to-protect-community.html) that they have been hacked, and their tools have been stolen by attackers. These tools are used by FireEye for Red Team assessments.

Stolen tools may be disclosed by hackers soon. According to FireEye, "none of the tools contain zero-day exploits" and the tools are leveraging well-known CVEs. However, in the case of disclosure of the tools, the popularity of the vulnerabilities used by the tools will be increased among threat actors and exploited widely.

Here is the list of vulnerabilities FireEye tools use:

* [CVE-2019-11510](https://vulmon.com/vulnerabilitydetails?qid=CVE-2019-11510): Pulse Secure Pulse Connect Secure unauthenticated path traversal
* [CVE-2020-1472](https://vulmon.com/vulnerabilitydetails?qid=CVE-2020-1472): Microsoft Active Directory privilege escalation vulnerability is also known as **Zerologon**
* [CVE-2018-13379](https://vulmon.com/vulnerabilitydetails?qid=CVE-2018-13379): Fortinet Fortigate SSL VPN unauthenticated path traversal
* [CVE-2018-15961](https://vulmon.com/vulnerabilitydetails?qid=CVE-2018-15961): Adobe ColdFusion remote code execution vulnerability
* [CVE-2019-0604](https://vulmon.com/vulnerabilitydetails?qid=CVE-2019-0604): Microsoft SharePoint remote code execution vulnerability
* [CVE-2019-0708](https://vulmon.com/vulnerabilitydetails?qid=CVE-2019-0708): Microsoft Windows Remote Desktop Services (RDS) remote code execution vulnerability also known as **BlueKeep**
* [CVE-2019-11580](https://vulmon.com/vulnerabilitydetails?qid=CVE-2019-11580): Atlassian Crowd remote code execution vulnerability
* [CVE-2019-19781](https://vulmon.com/vulnerabilitydetails?qid=CVE-2019-19781): Citrix Application Delivery Controller and Citrix Gateway remote code execution vulnerability
* [CVE-2020-10189](https://vulmon.com/vulnerabilitydetails?qid=CVE-2020-10189) – RCE for ZoHo ManageEngine Desktop Central remote code execution vulnerability
* [CVE-2014-1812](https://vulmon.com/vulnerabilitydetails?qid=CVE-2014-1812): Microsoft Windows local privilege escalation
* [CVE-2019-3398](https://vulmon.com/vulnerabilitydetails?qid=CVE-2019-3398): Atlassian Confluence authenticated remote code execution
* [CVE-2020-0688](https://vulmon.com/vulnerabilitydetails?qid=CVE-2020-0688): Microsoft Exchange remote code execution
* [CVE-2016-0167](https://vulmon.com/vulnerabilitydetails?qid=CVE-2016-0167): Local privilege escalation on older versions of Microsoft Windows
* [CVE-2017-11774](https://vulmon.com/vulnerabilitydetails?qid=CVE-2017-11774): Remote code execution in Microsoft Outlook via specially crafted URI (phishing) also known as Microsoft Outlook Security Feature Bypass Vulnerability
* [CVE-2018-8581](https://vulmon.com/vulnerabilitydetails?qid=CVE-2018-8581): Microsoft Exchange Server elevation of privilege vulnerability
* [CVE-2019-8394](https://vulmon.com/vulnerabilitydetails?qid=CVE-2019-8394): Zoho ManageEngine ServiceDesk Plus (SDP) unauthenticated file upload
