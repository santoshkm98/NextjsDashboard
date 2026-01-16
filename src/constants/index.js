export const selectOptions = [
  { label: "Storage", value: "Storage" },
  { label: "IAM", value: "IAM" },
  { label: "Compute", value: "Compute" },
  { label: "Users (Storage)", value: "userss3" },
  { label: "Users (Compute)", value: "usersec2" },
];

export const graphTabs = [
  { label: "Infrastructure Report", value: "Infrastructure Report" },
  { label: "User Configuration Report", value: "User Configuration Reports" },
];


// export const tableDataLogin = [
//   {
//     key: "1",
//     name: "Susan M. Cunniff",
//     activity: "Logged Out",
//     timestamp: "2025-06-20 | 20:00 PM",
//     vmname: "VM-01",
//   },
//   {
//     key: "2",
//     name: "Susan M. Cunniff",
//     activity: "Logged In",
//     timestamp: "2025-06-20 | 10:00 AM",
//     vmname: "VM-02",
//   },
//   {
//     key: "3",
//     name: "Christopher",
//     activity: "Logged Out",
//     timestamp: "2025-06-18 | 19:00 PM",
//     vmname: "VM-02",
//   },
//   {
//     key: "4",
//     name: "Christopher",
//     activity: "Logged In",
//     timestamp: "2025-06-18 | 11:30 AM",
//     vmname: "VM-03",
//   },
//   {
//     key: "5",
//     name: "Henrich",
//     activity: "Logged Out",
//     timestamp: "2025-06-16 | 18:00 PM",
//     vmname: "VM-01",
//   },
//   {
//     key: "6",
//     name: "Henrich",
//     activity: "Logged In",
//     timestamp: "2025-06-16 | 12:00 PM",
//     vmname: "VM-01",
//   },
// ];
// export const tableDataActivity = [
//   {
//     key: "1",
//     name: "Susan M. Cunniff",
//     activity: "Login",
//     action: "Changed Password",
//     timestamp: "2025-06-20 | 11:15 AM",
//     vmname: "VM-01",
//   },
//   {
//     key: "2",
//     name: "Daniel Marshell",
//     activity: "Notepad Launched",
//     action: "Research File Updated",
//     timestamp: "2025-06-19 | 19:00 PM",
//     vmname: "VM-02",
//   },
//   {
//     key: "3",
//     name: "Christopher",
//     activity: "VS Code Launched",
//     action: "Test File Deleted",
//     timestamp: "2025-06-17 | 13:00 PM",
//     vmname: "VM-04",
//   },
//   {
//     key: "4",
//     name: "Chris",
//     activity: "VS Code Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-17 | 17:00 PM",
//     vmname: "VM-04",
//   },
//   {
//     key: "5",
//     name: "Simon",
//     activity: "Atom Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-15 | 15:40 PM",
//     vmname: "VM-02",
//   },
//   {
//     key: "6",
//     name: "Christopher",
//     activity: "PLINK Launched",
//     action: "Test File Deleted",
//     timestamp: "2025-06-15 | 10:15 AM",
//     vmname: "VM-01",
//   },
//   {
//     key: "7",
//     name: "Rani",
//     activity: "VS Code Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-13 | 11:00 AM",
//     vmname: "VM-04",
//   },
//   {
//     key: "8",
//     name: "Anvi",
//     activity: "PLINK Launched",
//     action: "Test File Deleted",
//     timestamp: "2025-06-13 | 16:45 PM",
//     vmname: "VM-01",
//   },
//   {
//     key: "9",
//     name: "Anamika",
//     activity: "VS Code Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-12 | 20:10 PM",
//     vmname: "VM-02",
//   },
//   {
//     key: "10",
//     name: "Marshell",
//     activity: "PLINK Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-12 | 17:00 PM",
//     vmname: "VM-01",
//   },
//   {
//     key: "11",
//     name: "John",
//     activity: "VS Code Launched",
//     action: "Test File Deleted",
//     timestamp: "2025-06-11 | 15:20 PM",
//     vmname: "VM-04",
//   },
//   {
//     key: "12",
//     name: "Daniel",
//     activity: "Notepad Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-11 | 13:30 PM",
//     vmname: "VM-01",
//   },
//   {
//     key: "13",
//     name: "Steven",
//     activity: "Notepad Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-10 | 16:10 PM",
//     vmname: "VM-01",
//   },
//   {
//     key: "14",
//     name: "Harley",
//     activity: "VS Code Launched",
//     action: "Test File Deleted",
//     timestamp: "2025-06-09 | 18:40 PM",
//     vmname: "VM-04",
//   },
//   {
//     key: "15",
//     name: "Drake",
//     activity: "PLINK Launched",
//     action: "Test File Updated",
//     timestamp: "2025-06-08 | 12:45 PM",
//     vmname: "VM-01",
//   },
// ];

export const tableConfig = {
  Storage: [
    {
      title: "Bucket",
      dataIndex: "bucket",
      sorter: (a, b) => a.bucket.localeCompare(b.bucket),
    },
    {
      title: "Versioning",
      dataIndex: "versioning",
      sorter: (a, b) => a.versioning.localeCompare(b.versioning),
    },
    {
      title: "Encryption",
      dataIndex: "bucket_Encryption",
      sorter: (a, b) => a.bucket_Encryption.localeCompare(b.bucket_Encryption),
    },
    {
      title: "Permission",
      dataIndex: "permission",
      sorter: (a, b) => a.permission.localeCompare(b.permission),
    },
    // {
    //   title: 'Rule Status',
    //   dataIndex: 'lifecycle_rule_status',
    //   sorter: (a, b) => a.lifecycle_rule_status.localeCompare(b.lifecycle_rule_status),
    // },
    {
      title: "Block Public ACls",
      dataIndex: "blockPublicAcls",
      sorter: (a, b) => a.blockPublicAcls.localeCompare(b.blockPublicAcls),
    },
    // {
    //   title: 'Ignore Public Acls',
    //   dataIndex: 'ignorePublicAcls',
    //   sorter: (a, b) => a.ignorePublicAcls.localeCompare(b.ignorePublicAcls),
    // },
    {
      title: "Block Public Policy",
      dataIndex: "blockPublicPolicy",
      sorter: (a, b) => a.blockPublicPolicy.localeCompare(b.blockPublicPolicy),
    },
    {
      title: "Restrict Public Buckets",
      dataIndex: "restrictPublicBuckets",
      sorter: (a, b) =>
        a.restrictPublicBuckets.localeCompare(b.restrictPublicBuckets),
    },
    {
      title: "Bucket Location",
      dataIndex: "bucket_location",
      sorter: (a, b) => a.bucket_location.localeCompare(b.bucket_location),
    },
  ],
  IAM: [
    {
      title: "Username",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Createdate",
      dataIndex: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: "MFA Enabled",
      dataIndex: "mfa",
      sorter: (a, b) => a.mfa.localeCompare(b.mfa),
    },
    {
      title: "AttachedPolicies",
      dataIndex: "Policies",
      sorter: (a, b) => a.Policies.localeCompare(b.Policies),
    },
    {
      title: "RequireUppercaseCharacters",
      dataIndex: "uppercasechar",
      sorter: (a, b) => a.uppercasechar.localeCompare(b.uppercasechar),
    },
    {
      title: "RequireLowercaseCharacters",
      dataIndex: "lowercasechar",
      sorter: (a, b) => a.lowercasechar.localeCompare(b.lowercasechar),
    },
    {
      title: "Change Password",
      dataIndex: "changepass",
      sorter: (a, b) => a.changepass.localeCompare(b.changepass),
    },
    {
      title: "Expire Passwords",
      dataIndex: "expass",
      sorter: (a, b) => a.expass.localeCompare(b.expass),
    },
    {
      title: "Groups",
      dataIndex: "groups",
      sorter: (a, b) => a.groups.localeCompare(b.groups),
      ellipsis: true,
    },
    {
      title: "HasConsolePassword",
      dataIndex: "consolepass",
      sorter: (a, b) => a.consolepass.localeCompare(b.consolepass),
    },
    {
      title: "Flat Tags",
      dataIndex: "Tags",
      sorter: (a, b) => a.Tags.localeCompare(b.Tags),
      ellipsis: true,
    },
    {
      title: "AccessKeys",
      dataIndex: "AccessKeys",
      sorter: (a, b) => a.AccessKeys.localeCompare(b.AccessKeys),
      ellipsis: true,
    },
    {
      title: "AccessKeyLastUsed_time",
      dataIndex: "lastusedak",
      sorter: (a, b) => a.lastusedak.localeCompare(b.lastusedak),
    },
    {
      title: "AccessKeyLastUsed_region",
      dataIndex: "lastusedregionak",
      sorter: (a, b) => a.lastusedregionak.localeCompare(b.lastusedregionak),
    },
    {
      title: "AccessKeyLastUsed_service_name",
      dataIndex: "servivenameak",
      sorter: (a, b) => a.servivenameak.localeCompare(b.servivenameak),
    },
  ],
  Compute: [
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      title: "Platform",
      dataIndex: "platform",
      sorter: (a, b) => a.platform.localeCompare(b.platform),
    },
    {
      title: "State",
      dataIndex: "state",
      sorter: (a, b) => a.state.localeCompare(b.state),
    },
    {
      title: "SubnetId",
      dataIndex: "subnetId",
      sorter: (a, b) => a.subnetId.localeCompare(b.subnetId),
    },
    {
      title: "VPC ID",
      dataIndex: "vpcId",
      sorter: (a, b) => a.vpcId.localeCompare(b.vpcId),
    },
    {
      title: "Security Group ID",
      dataIndex: "securityGroupId",
      sorter: (a, b) => a.securityGroupId.localeCompare(b.securityGroupId),
    },
    {
      title: "Security Group Name",
      dataIndex: "securityGroupName",
      sorter: (a, b) => a.securityGroupName.localeCompare(b.securityGroupName),
    },
    {
      title: "EBS Encryption",
      dataIndex: "ebsEncryption",
      sorter: (a, b) => a.ebsEncryption.localeCompare(b.ebsEncryption),
    },
  ],
  userss3: [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Created_at",
      dataIndex: "created_at",
      sorter: (a, b) => a.created_at.localeCompare(b.created_at),
    },
    {
      title: "ResourceActions",
      dataIndex: "resourceactions",
      sorter: (a, b) => a.resourceactions.localeCompare(b.resourceactions),
      ellipsis: true,
    },
    {
      title: "ResourcesActionAplliedTo",
      dataIndex: "resourceactionappliedto",
      sorter: (a, b) =>
        a.resourceactionappliedto.localeCompare(b.resourceactionappliedto),
    },
    {
      title: "Action Permission",
      dataIndex: "actionpermission",
      sorter: (a, b) => a.actionpermission.localeCompare(b.actionpermission),
      ellipsis: true,
    },
    {
      title: "Source Policy ID",
      dataIndex: "sourcepolicyId",
      sorter: (a, b) => a.sourcepolicyId.localeCompare(b.sourcepolicyId),
      ellipsis: true,
    },
    {
      title: "Source Policy Type",
      dataIndex: "sourcepolicyType",
      sorter: (a, b) => a.sourcepolicyType.localeCompare(b.sourcepolicyType),
    },
  ],
  usersec2: [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Created_at",
      dataIndex: "created_at",
      sorter: (a, b) => a.created_at.localeCompare(b.created_at),
    },
    {
      title: "ResourceActions",
      dataIndex: "resourceactions",
      sorter: (a, b) => a.resourceactions.localeCompare(b.resourceactions),
      ellipsis: true,
    },
    {
      title: "ResourcesActionAplliedTo",
      dataIndex: "resourceactionappliedto",
      sorter: (a, b) =>
        a.resourceactionappliedto.localeCompare(b.resourceactionappliedto),
    },
    {
      title: "Action Permission",
      dataIndex: "actionpermission",
      sorter: (a, b) => a.actionpermission.localeCompare(b.actionpermission),
      ellipsis: true,
    },
    {
      title: "Source Policy ID",
      dataIndex: "sourcepolicyId",
      sorter: (a, b) => a.sourcepolicyId.localeCompare(b.sourcepolicyId),
      ellipsis: true,
    },
    {
      title: "Source Policy Type",
      dataIndex: "sourcepolicyType",
      sorter: (a, b) => a.sourcepolicyType.localeCompare(b.sourcepolicyType),
    },
  ],
};

export const newsData = [
  {
    key: 1,
    img: "/assets/Linux.png",
    title: "Data Destruction,encrypting data to make it inaccessible.",
    date: "Released 2025 DEC 18",
    affected: "1 Affected Asset",
    status: null,
  },
  {
    key: 2,
    img: "/assets/Ngnix.png",
    title: "Acquire and Compromise Infrastructure(DNS).",
    date: "Released 2025 DEC 5",
    affected: null,
    status: "You are safe!",
  },
  {
    key: 3,
    img: "/assets/windows.png",
    title:
      "Password spraying, brute-force attacks, and credential theft can result in unauthorized access to sensitive AWS resources.",
    date: "Released 2025 NOV 29",
    affected: "8 Affected Assets",
    status: null,
  },
  {
    key: 4,
    img: "/assets/selenium.png",
    title: "Using alternative protocols to exfiltrate data.",
    date: "Released 2025 Sep 17",
    affected: null,
    status: "You are safe!",
  },
  {
    key: 5,
    img: "/assets/selenium.png",
    title: "Privilege escalation and Account Compromise.",
    date: "Released 2025 Sep 10",
    affected: null,
    status: "You are safe!",
  },
  {
    key: 6,
    img: "/assets/selenium.png",
    title: "Remote access for brute force and exploitation attempts.",
    date: "Released 2025 Sep 5",
    affected: null,
    status: "You are safe!",
  },
];

// constants.js

export const formData = {
  infrastructure: [
    {
      label: "Platform",
      type: "radio",
      defaultValue: "Windows",
      options: ["Windows", "Linux"],
    },
    {
      label: "Core Requirements",
      type: "select",
      defaultValue: "12",
      options: ["8", "12", "16"],
    },
    {
      label: "RAM Requirements",
      type: "select",
      defaultValue: "Custom",
      options: ["Custom", "16 GB", "32 GB"],
    },
    {
      label: "RAM",
      type: "input",
      defaultValue: "32 GB",
    },
    {
      label: "Storage Requirements",
      type: "select",
      defaultValue: "240 TB",
      options: ["240 TB", "500 TB"],
    },
  ],
  gpu: [
    {
      label: "GPU Requirements",
      type: "select",
      defaultValue: "16 GB GDDR6 @ 320 GBps",
      options: ["16 GB GDDR6 @ 320 GBps", "24 GB GDDR6X"],
    },
  ],
  backup: [
    {
      label: "Backup Requirements",
      type: "radio",
      defaultValue: "Yes",
      options: ["Yes", "No"],
    },
    {
      label: "Retention (in days)",
      type: "select",
      defaultValue: "30 Days",
      options: ["30 Days", "60 Days"],
    },
  ],
  location: [
    {
      label: "Location",
      type: "select",
      defaultValue: "Mumbai",
      options: ["Mumbai", "Delhi", "Bangalore"],
    },
  ],
};

//PenetrationTest Results

export const penetrationResultsData = [
    {
    key: "1",
    name: "SQL Injection",
    cvss: "9",
    severity: "Critical",
    url: "https://www.clientdomain.com/projects/data",
  },
    {
    key: "2",
    name: "Broken Authentication",
    cvss: "8.5",
    severity: "High",
    url: "https://www.clientdomain.com/login/",
  },
    {
    key: "3",
    name: "Stored Cross-Site Scripting (XSS)",
    cvss: "7.7",
    severity: "High",
    url: "https://www.clientdomain.com/projects/data",
  },
   {
    key: "4",
    name: "Authentication Missing",
    cvss: "6.5",
    severity: "Medium",
    url: "https://www.clientdomain.com/projects/data",
  },
    {
    key: "5",
    name: "Incorrect Contructor Name",
    cvss: "6.3",
    severity: "Medium",
    url: "https://www.clientdomain.com/projects/data",
  },
  {
    key: "6",
    name: "Missing API Security Headers",
    cvss: "5.0",
    severity: "Low",
    url: "https://www.clientdomain.com/projects/data",
  },


 {
    key: "7",
    name: "System & Software Vulnerabilities",
    cvss: "5.0",
    severity: "Low",
    url: "https://www.clientdomain.com/login/",
  },
  {
    key: "8",
    name: "Session Hijacking",
    cvss: "5.0",
    severity: "Low",
    url: "https://www.clientdomain.com/login/",
  },
  {
    key: "9",
    name: "Files Guessing Attacks",
    cvss: "4.5",
    severity: "Info",
    url: "https://www.clientdomain.com/projects/data/",
  },
  {
    key: "10",
    name: "Cookie Abuse",
    cvss: "5.5",
    severity: "Info",
    url: "https://www.clientdomain.com/login/",
  },
];

export const penetrationTableConfig = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "CVSS Score",
    dataIndex: "cvss",
    sorter: (a, b) => a.cvss.localeCompare(b.cvss),
  },
  {
    title: "Severity",
    dataIndex: "severity",
    sorter: (a, b) => a.severity.localeCompare(b.severity),
  },
  {
    title: "Affected URL",
    dataIndex: "url",
    sorter: (a, b) => a.url.localeCompare(b.url),
  },
];

export const ticketList = [
  {
    key: "1",
    name: "",
    request: "Versioning Control not enabled for S3 buckets",
    time: "1 day ago",
    priority: "High",
    color: "#F7423D",
  },
  {
    key: "2",
    name: "",
    request: "Acls have misconfigurations for IAM users ",
    time: "2 days ago",
    priority: "Medium",
    color: "#FF7F00",
  },
  {
    key: "3",
    name: "",
    request: "IAM users should enable MFA",
    time: "2 days ago",
    priority: "High",
    color: "#F7423D",
  },
];

export const attackPaths = [
  {
    key: "1",
    number: "2",
    heading: "Expired Credentials",
    paragraph: "Identify and remove expired or unused IAM credentials.",
  },
  {
    key: "2",
    number: "7",
    heading: "Unnecessary Permissions",
    paragraph: "Ensure IAM roles and users have minimum required permissions.",
  },
  {
    key: "3",
    number: "1",
    heading: "MFA Disabled",
    paragraph: "Enable MFA to improve account security.",
  },
];

export const notifications = [
  {
    key: "1",
    type: "Alert",
    iconColorClass: "notificationred",
    title: "User Login Outside Working Hours",
    description:
      "User john logged in at 12-01-2026 23:12 GMT, which is outside the configured business hours.",
    date: "12 October 12:00 AM",
  },
  {
    key: "2",
    type: "Message",
    iconColorClass: "notificationyellow",
    title: "Unused Resources",
    description:
      "Identify and address any resources that are no longer in use, which can lead to unnecessary costs.",
    date: "10 October 11:00 AM",
  },
  {
    key: "3",
    type: "Alert",
    iconColorClass: "notificationred",
    title: "Expired Credentials",
    description: "Matt password recently got expired.",
    date: "06 October 16:00 PM",
  },
];

export const insights = [
  {
    key: "1",
    title: "3+ Open Ports with overly permissive inbound or outbound rules",
    tag: "Ports",
    tagClassName: "dangerTags",
  },
  {
    key: "2",
    title: "3 S3 Buckets are not encrypted leading to data leakage.",
    tag: "Rules",
    tagClassName: "warningTags",
  },
];

// Reports Tables

export const s3Versioning = [
  {
    key: "1",
    bucket: "demo-neo4j-backend",
    versioning: "Suspended",
    bucket_Encryption: "False",
    permission: "FULL_CONTROL",
    blockPublicAcls: "TRUE",
    blockPublicPolicy: "TRUE",
    restrictPublicBuckets: "TRUE",
    bucket_location: "ap-south-1",
  },
  {
    key: "2",
    bucket: "neo4j-dem123",
    versioning: "NULL",
    bucket_Encryption: "False",
    permission: "FULL_CONTROL",
    blockPublicAcls: "TRUE",
    blockPublicPolicy: "TRUE",
    restrictPublicBuckets: "TRUE",
    bucket_location: "ap-south-1",
  },
];

export const iamUsers = [
  {
    key: "1",
    name: "Demo-user",
    date: "2026-01-12 | 11:40:08",
    mfa: "FALSE",
    Policies: "NULL",
    uppercasechar: "TRUE",
    lowercasechar: "TRUE",
    changepass: "TRUE",
    expass: "FALSE",
    groups: "NULL",
    consolepass: "FALSE",
    Tags: "NULL",
    AccessKeys: "NULL",
    lastusedak: "NONE",
    lastusedregionak: "NONE",
    servivenameak: "NONE",
  },
  {
    key: "2",
    name: "Guest-user",
    date: "2026-01-15 | 04:41:26",
    mfa: "FALSE",
    Policies: "NULL",
    uppercasechar: "TRUE",
    lowercasechar: "TRUE",
    changepass: "TRUE",
    expass: "FALSE",
    groups: "readOnlyAccess",
    consolepass: "FALSE",
    Tags: "Terraform=true Project=Demo-server tag-key=user-guest",
    AccessKeys: "****",
    lastusedak: "NONE",
    lastusedregionak: "N/A",
    servivenameak: "N/A",
  },
  {
    key: "3",
    name: "Techvito-preethi",
    date: "2026-01-17 | 05:40:57",
    mfa: "TRUE",
    Policies: "NULL",
    uppercasechar: "TRUE",
    lowercasechar: "TRUE",
    changepass: "TRUE",
    expass: "FALSE",
    groups: "iam-full-access, techvito-developers, billing-access-read-only",
    consolepass: "TRUE",
    Tags: "****=work on opentofu",
    AccessKeys: "****",
    lastusedak: "2026-01-07T06:27:00+00:00",
    lastusedregionak: "ap-south-1",
    servivenameak: "ec2",
  },
];

export const ec2 = [
  {
    key: 1,
    type: "t2.micro",
    platform: "Windows",
    state: "running",
    subnetId: "subnet-0ec35fad2f2a82bb5",
    vpcId: "vpc-0f2d098e1d0a74e93",
    securityGroupId: "sg-02db72b524062e8b1",
    securityGroupName: " demo_win_sg",
    ebsEncryption: "FALSE",
  },
];

export const s3BucketUsers = [
  {
    key: 1,
    name: "Prod-user3",
    created_at: "2026-01-03 | 11:21:02",
    resourceactions:
      "s3-upload/store new object , s3-set/change (ACL) permissions for an existing object ,s3:-retrieve an Object, s3- retrieve Object Acl , s3-Delete an Object",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission: "allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "AmazonS3FullAccess",
    sourcepolicyType: "IAM Policy",
  },
  {
    key: 2,
    name: "Tech-user",
    created_at: "2026-01-09 | 10:21:02",
    resourceactions:
      "s3-upload/store new object , s3-set/change (ACL) permissions for an existing object ,s3:-retrieve an Object, s3- retrieve Object Acl , s3-Delete an Object",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission: "allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "AdministratorAccess, SystemAdministrator",
    sourcepolicyType: "IAM Policy, IAM Policy",
  },
  {
    key: 3,
    name: "Preethi-techvito",
    created_at: "2026-01-07 | 13:21:02",
    resourceactions:
      "s3-upload/store new object , s3-set/change (ACL) permissions for an existing object ,s3:-retrieve an Object, s3- retrieve Object Acl , s3-Delete an Object",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission: "allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "AmazonS3FullAccess",
    sourcepolicyType: "IAM Policy",
  },
  {
    key: 4,
    name: "Sandeep-gokhale",
    created_at: "2026-01-06 | 16:05:02",
    resourceactions:
      "s3-upload/store new object , s3-set/change (ACL) permissions for an existing object ,s3:-retrieve an Object, s3- retrieve Object Acl , s3-Delete an Object",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission: "allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "AdministratorAccess",
    sourcepolicyType: "IAM Policy",
  },
  {
    key: 5,
    name: "Terraform-user",
    created_at: "2026-01-09 | 14:40:02",
    resourceactions:
      "s3-upload/store new object , s3-set/change (ACL) permissions for an existing object ,s3:-retrieve an Object, s3- retrieve Object Acl , s3-Delete an Object",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission: "allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "SystemAdministrator, AdministratorAccess",
    sourcepolicyType: "IAM Policy, IAM Policy",
  },
];

export const ec2Users = [
  {
    key: 1,
    name: "Prod-user3",
    created_at: "2026-01-10 | 11:21:02",
    resourceactions:
      "ec2-create new routetable , ec2-delete routetable ,ec2:create/modify SecurityGroup-Ingress rules, ec2:create/modify SecurityGroup-Egress rules ,ec2-create new SecurityGroup, ec2-Modify certain Instance Attributes of an instance, ec2-modify volume, ec2-remove/detach volume, ec2-delete instances",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission:
      "implicitDeny, implicitDeny, implicitDeny, implicitDeny, implicitDeny, implicitDeny, implicitDeny, implicitDeny, implicitDeny",
    sourcepolicyId: "NULL",
    sourcepolicyType: "NULL",
  },
  {
    key: 2,
    name: "Tech-user",
    created_at: "2026-01-13 | 10:21:02",
    resourceactions:
      "ec2-create new routetable , ec2-delete routetable ,ec2:create/modify SecurityGroup-Ingress rules, ec2:create/modify SecurityGroup-Egress rules ,ec2-create new SecurityGroup, ec2-Modify certain Instance Attributes of an instance, ec2-modify volume, ec2-remove/detach volume, ec2-delete instances",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission:
      "allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId:
      "SystemAdministrator, AmazonEC2FullAccess, AdministratorAccess",
    sourcepolicyType: "IAM Policy, IAM Policy, IAM Policy",
  },
  {
    key: 3,
    name: "Preethi-techvito",
    created_at: "2026-01-13 | 13:21:02",
    resourceactions:
      "ec2-create new routetable , ec2-delete routetable ,ec2:create/modify SecurityGroup-Ingress rules, ec2:create/modify SecurityGroup-Egress rules ,ec2-create new SecurityGroup, ec2-Modify certain Instance Attributes of an instance, ec2-modify volume, ec2-remove/detach volume, ec2-delete instances",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission:
      "allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "AmazonEC2FullAccess",
    sourcepolicyType: "IAM Policy",
  },
  {
    key: 4,
    name: "Sandeep-gokhale",
    created_at: "2026-01-15 | 16:05:02",
    resourceactions:
      "ec2-create new routetable , ec2-delete routetable ,ec2:create/modify SecurityGroup-Ingress rules, ec2:create/modify SecurityGroup-Egress rules ,ec2-create new SecurityGroup, ec2-Modify certain Instance Attributes of an instance, ec2-modify volume, ec2-remove/detach volume, ec2-delete instances",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission:
      "allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "AdministratorAccess, AmazonEC2FullAccess",
    sourcepolicyType: "IAM Policy, IAM Policy",
  },
  {
    key: 5,
    name: "Terraform-user",
    created_at: "2026-01-17 | 14:40:02",
    resourceactions:
      "ec2-create new routetable , ec2-delete routetable ,ec2:create/modify SecurityGroup-Ingress rules, ec2:create/modify SecurityGroup-Egress rules ,ec2-create new SecurityGroup, ec2-Modify certain Instance Attributes of an instance, ec2-modify volume, ec2-remove/detach volume, ec2-delete instances",
    resourceactionappliedto: "*, *, *, *, *",
    actionpermission:
      "allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed, allowed",
    sourcepolicyId: "SystemAdministrator, AdministratorAccess",
    sourcepolicyType: "IAM Policy, IAM Policy",
  },
];
export const dataMap = {
  Storage: s3Versioning,
  IAM: iamUsers,
  Compute: ec2,
  userss3: s3BucketUsers,
  usersec2: ec2Users,
};

export const ticketLists = [
  { key: 1, taskNumber: "Ticket 21", name: "Add configs for GDPR" },
  { key: 2, taskNumber: "Ticket 20", name: "12 Rules for SOC2" },
  { key: 3, taskNumber: "Ticket 17", name: "1 Rule for DPDPA" },
  { key: 4, taskNumber: "Ticket 14", name: "Fix Infrastructure" },
  { key: 5, taskNumber: "Ticket 11", name: "EC2 Fix" },
  { key: 6, taskNumber: "Ticket 10", name: "S3 Fix" },
];

export const analysis = [
  { key: 1, label: "Risk Score", value: "15/24" },
  { key: 2, label: "Cost of non-complaince", value: "$200000" },
  { key: 3, label: "Incidents", value: "03" },
];

export const newAnalysis = [
  { key: 1, label: "Weak Configurations", value: "15" },
  { key: 2, label: "Incidents", value: "02" },
  { key: 3, label: "Tickets Pending", value: "19" },
];
export const weakConfigurations = [
  { key: 1, taskNumber: "Config 1" },
  { key: 2, taskNumber: "Config 2" },
  { key: 3, taskNumber: "Config 3" },
  { key: 4, taskNumber: "Config 4" },
  { key: 5, taskNumber: "Config 5" },
  { key: 6, taskNumber: "Config 6" },
  { key: 7, taskNumber: "Config 7" },
];

export const infrastructureGraph = [
  { data: { id: "AWS", label: "AWS", level: 1, details: { Type: "AWS" } } },
  {
    data: {
      id: "EC2",
      label: "EC2",
      level: 2,
      details: {
        Resource: "EC2",
      },
    },
  },
  {
    data: {
      id: "subnets",
      label: "subnets",
      level: 2,
      details: {
        Resource: "subnets",
      },
    },
  },
  {
    data: {
      id: "S3",
      label: "S3",
      level: 2,
      details: {
        Resource: "S3",
      },
    },
  },
  {
    data: {
      id: "vpcs",
      label: "vpcs",
      level: 2,
      details: {
        Resource: "vpcs",
      },
    },
  },
  {
    data: {
      id: "IAM",
      label: "IAM",
      level: 2,
      details: {
        Resource: "iam",
      },
    },
  },
  {
    data: {
      id: "lambda",
      label: "lambda",
      level: 2,
      details: {
        Resource: "lambda",
      },
    },
  },
  {
    data: {
      id: "Security Groups",
      label: "Security Groups",
      level: 2,
      details: {
        Resource: "Security Group",
      },
    },
  },
  {
    data: {
      id: "i-06d3c9",
      label:"i-06d3c9",
      level: 3,
      details: {
        id: "i-06dcc92d8c007f7",
        type: "t2.micro",
        platform: "Windows",
        state: "running",
        subnetId: "subnet-0ec35fad2f2a82bb5",
        vpcId: "vpc-0f2d098e1d0a74e93",
        securityGroupId: "sg-02db72b524062e8b1",
        securityGroupName: " demo_win_sg",
        ebsEncryption: false,
      },
    },
  },
  {
    data: {
      id: "sg_of7de",
      label:'sg_of7de',
      level: 4,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
  },
  {
    data: {
      id: "sg_of7de1",
      label:'sg_of7de1',
      level: 4,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
  },
  {
    data: {
      id: "open_ports1",
      label:"openports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "open_ports2",
      label:"openports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "open_ports3",
      label:"open_ports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "open_ports4",
      label:"openports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "sg-08361",
      label:"sg-08361",
      level: 4,
      details: {
        SecurityGroupRuleId: "sgr-08363af6ed692a818f",
        GroupId: "sg-08363abadff770a44c",
        GroupOwnerId: "430118819650",
        IsEgress: "False",
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-08363af6ed692a818f",
      },
    },
  },
  {
    data: {
      id: "sg-08362",
      label:"sg-08362",
      level: 4,
      details: {
        SecurityGroupRuleId: "sgr-08363af6ed692a818f",
        GroupId: "sg-08363abadff770a44c",
        GroupOwnerId: "430118819650",
        IsEgress: "False",
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-08363af6ed692a818f",
      },
    },
  },
  {
    data: {
      id: "sg-0ae5",
      label:"sg-0ae5",
      level: 4,
      details: {
        SecurityGroupRuleId: "sg-0ea5f6ed692a818f",
        GroupId: "sg-0ea56abadff770a44c",
        GroupOwnerId: "430118819650",
        IsEgress: "False",
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sg-0ea5f6ed692a818f",
      },
    },
  },
  {
    data: {
      id: "120",
      label:"120",
      level: "Warnings",
      details: {
        Desc: "using alternative protocols to exfiltrate data",
        elementId: "4:ae75adbe-1aa8-4903-8979-e6c0006423da:120",
      },
    },
  },
  {
    data: {
      id: "124",
      label:"124",
      level: "Warnings",
      details: {
        Desc: "using alternative protocols to exfiltrate data",
        elementId: "4:ae75adbe-1aa8-4903-8979-e6c0006423da:124",
      },
    },
  },
  {
    data: {
      id: "neo4j-de",
      label:"neo4j-de",
      level: 4,
      details: {
        bucket: "demo-neo4j-backend",
        versioning: "Enabled",
        bucket_Encryption: false,
        permission: "FULL_CONTROL",
        lifecycle_rule_name: "None",
        lifecycle_rule_status: "None",
        lifecycle_transitions: "None",
      },
    },
  },
  {
    data: {
      id: "No Encryption",
      label: "No Encryption",
      level: 4,
      details: {
        name: "No Encryption",
        desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1485",
      },
    },
  },
  {
    data: {
      id: "No Versioning",
      label:"No Versioning",
      level: 4,
      details: {
        name: "No histroy,limited Recovery and Data Loss Risk",
      },
    },
  },
  {
    data: {
      id: "ACLs",
      label:"ACLs",
      level: 4,
      details: {
        name: "Acquire and Compromise Infrastructure(DNS)",
        attacks_id: "T1583",
      },
    },
  },
  {
    data: {
      id: "T1485",
      label:"T1485",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1485-T1486",
      },
    },
  },
  {
    data: {
      id: "T1583",
      label:"T1583",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1583-T1584",
      },
    },
  },
  // {
  //   data: {
  //     id: "techvito-user",
  //     label:"techvito-user",
  //     level: 4,
  //     details: {
  //       UserName: "techvito-user",
  //       CreateDate: "2024-08-29T05:40:57+00:00",
  //       Arn: "arn:aws:iam::430118819650:user/techvito-user",
  //       mfaEnabled: "True",
  //       AccessKeys: "****",
  //       AccessKeyLastUsed: "2025-05-12 12:45",
  //       region: "ap-south-1",
  //       service_name: "s3",
  //       AttachedPolicies:
  //         "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
  //       Groups:
  //         "iam-full-access, techvito-developers, billing-access-read-only",
  //       HasConsolePassword: "True",
  //       Tags: {
  //         "****": "work on opentofu",
  //       },
  //       FlatTags: "*****=work on opentofu",
  //     },
  //   },
  // },
  {
    data: {
      id: "guest-user",
      label:"guest-user",
      level: 4,
      details: {
        UserName: "guest-user",
        CreateDate: "2024-08-29T05:40:57+00:00",
        Arn: "arn:aws:iam::430118819650:user/guest-user",
        mfaEnabled: "True",
        AccessKeys: "****",
        // AccessKeys: "AKIAWIJIUK5BHXHLBIOO",
        AccessKeyLastUsed: "2026-01-12 12:45",
        region: "ap-south-1",
        service_name: "s3",
        AttachedPolicies:
          "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
        Groups:
          "iam-full-access, techvito-developers, billing-access-read-only",
        HasConsolePassword: "True",
        Tags: {
          "****": "work on opentofu",
        },
        FlatTags: "****=work on opentofu",
      },
    },
  },
  {
    data: {
      id: "No MFA",
      label:"No MFA",
      level: 4,
      details: {
        name: "Increased Vulnerability to Unauthorized Access,Credential Stuffing and Brute Force Attacks",
        attacks_id: "T1110.004",
      },
    },
  },
  {
    data: {
      id: "T1110",
      label:"T1110",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1110",
      },
    },
  },
  {
    data: {
      id: "AWS-EC2",
      source: "AWS",
      target: "EC2",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "AWS-subnets",
      source: "AWS",
      target: "subnets",
      label: "Has_resource",
    },
  },
  {
    data: { id: "AWS-S3", source: "AWS", target: "S3", label: "Has_resource" },
  },
  {
    data: {
      id: "AWS-vpcs",
      source: "AWS",
      target: "vpcs",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "AWS-IAM",
      source: "AWS",
      target: "IAM",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "AWS-lambda",
      source: "AWS",
      target: "lambda",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "AWS-Security Groups",
      source: "AWS",
      target: "Security Groups",
      label: "Has_resource",
    },
  },
  { data: { id: "EC2-i-06d3c9", source: "EC2", target: "i-06d3c9" } },
  { data: { id: "i-06d3c9-sg_of7de", source: "i-06d3c9", target: "sg_of7de" } },
  {
    data: { id: "i-06d3c9-sg_of7de1", source: "i-06d3c9", target: "sg_of7de1" },
  },
  {
    data: {
      id: "sg_of7de1-open_ports1",
      source: "sg_of7de1",
      target: "open_ports1",
    },
  },
  {
    data: {
      id: "sg_of7de-open_ports2",
      source: "sg_of7de",
      target: "open_ports2",
    },
  },
  {
    data: {
      id: "Security Groups-sg-08361",
      source: "Security Groups",
      target: "sg-08361",
    },
  },
  {
    data: {
      id: "Security Groups-sg-08362",
      source: "Security Groups",
      target: "sg-08362",
    },
  },
  {
    data: {
      id: "Security Groups-sg-0ae5",
      source: "Security Groups",
      target: "sg-0ae5",
    },
  },
  {
    data: {
      id: "sg-08361-open_ports3",
      source: "sg-08361",
      target: "open_ports3",
    },
  },
  {
    data: {
      id: "sg-08362-open_ports4",
      source: "sg-08362",
      target: "open_ports4",
    },
  },
  { data: { id: "open_ports3-120", source: "open_ports3", target: "120" } },
  { data: { id: "open_ports4-124", source: "open_ports4", target: "124" } },
  { data: { id: "S3-neo4j-de", source: "S3", target: "neo4j-de" } },
  {
    data: {
      id: "neo4j-de-No Encryption",
      source: "neo4j-de",
      target: "No Encryption",
    },
  },
  {
    data: {
      id: "neo4j-de-No Versioning",
      source: "neo4j-de",
      target: "No Versioning",
    },
  },
  {
    data: {
      id: "No Encryption-T1485",
      source: "No Encryption",
      target: "T1485",
    },
  },
  { data: { id: "ACLs-T1583", source: "ACLs", target: "T1583" } },
  { data: { id: "neo4j-de-ACLs", source: "neo4j-de", target: "ACLs" } },
  // { data: { id: "techvito-user-IAM", source: "IAM", target: "techvito-user" } },
  { data: { id: "guest-user-IAM", source: "IAM", target: "guest-user" } },
  { data: { id: "No MFA-guest-user", source: "guest-user", target: "No MFA" } },
  { data: { id: "T1110-No MFA", source: "No MFA", target: "T1110" } },
];

export const Produser = [
  {
    data: {
      id: "Prod-User",
      label: "Prod-User",
      level: 1,
      details: {
        Name: "Prod-User",
        Type: "Admin",
      },
    },
  },
  // {
  //   data: {
  //     id: "iam-1",
  //     label: "IAM",
  //     level: 2,
  //     details: {
  //       Name: "IAM",
  //       AccessType: "Full Write Access",
  //     },
  //   },
  // },
  {
    data: {
      id: "s3-1",
      label: "S3",
      level: 2,
      details: {
        Name: "s3",
        AccessType: "Full Write Access",
      },
    },
  },
  {
    data: {
      id: "ec2-1",
      label: "Ec2",
      level: 2,
      details: {
        Name: "Ec2",
        AccessType: "Full Write Access",
      },
    },
  },
  {
    data: {
      id: "neo4j",
      label: "neo4j-de",
      level: 2,
      details: {
        bucket: "demo-neo4j-backend",
        versioning: "Enabled",
        bucket_Encryption: false,
        permission: "FULL_CONTROL",
        lifecycle_rule_name: "None",
        lifecycle_rule_status: "None",
        lifecycle_transitions: "None",
      },
    },
  },

  {
    data: {
      id: "ACLs",
      label: "ACLs",
      level: 2,
      details: {
        name: "Acquire and Compromise Infrastructure(DNS)",
        attacks_id: "T1583",
      },
    },
  },
  {
    data: {
      id: "No Encryption",
      label: "No Encryption",
      level: 2,
      details: {
        name: "No Encryption",
        desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1485",
      },
    },
  },
  // {
  //   data: {
  //     id: "No Versioning",
  //     label: "No Versioning",
  //     level: 2,
  //     details: {
  //       name: "No histroy,limited Recovery and Data Loss Risk",
  //     },
  //   },
  // },
  {
    data: {
      id: "T1583",
      label: "T1583",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1583-T1584",
      },
    },
  },
  {
    data: {
      id: "T1485",
      label: "T1485",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1583-T1584",
      },
    },
  },
    {
    data: {
      id: "T1110-041",
      label: "T1110",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1110-T11141",
      },
    },
  },
  // {
  //   data: {
  //     id: "techvito-user",
  //     label: "techvito-user",
  //     level: 2,
  //     details: {
  //       UserName: "techvito-user",
  //       CreateDate: "2024-08-29T05:40:57+00:00",
  //       Arn: "arn:aws:iam::430118819650:user/techvito-user",
  //       mfaEnabled: "True",
  //       AccessKeys: "****",
  //       AccessKeyLastUsed: "2025-05-12 12:45",
  //       region: "ap-south-1",
  //       service_name: "s3",
  //       AttachedPolicies:
  //         "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
  //       Groups:
  //         "iam-full-access, techvito-developers, billing-access-read-only",
  //       HasConsolePassword: "True",
  //       Tags: {
  //         "****": "work on opentofu",
  //       },
  //       FlatTags: "*****=work on opentofu",
  //     },
  //   },
  // },
  // {
  //   data: {
  //     id: "guest-user",
  //     label: "guest-user",
  //     level: 2,
  //     details: {
  //       UserName: "guest-user",
  //       CreateDate: "2024-08-29 05:40",
  //       Arn: "arn:aws:iam::430118819650:user/guest-user",
  //       mfaEnabled: "True",
  //       AccessKeys: "****",
  //       AccessKeyLastUsed: "2025-05-12 12:45",
  //       region: "ap-south-1",
  //       service_name: "s3",
  //       AttachedPolicies:
  //         "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
  //       Groups:
  //         "iam-full-access, techvito-developers, billing-access-read-only",
  //       HasConsolePassword: "True",
  //       Tags: {
  //         "****": "work on opentofu",
  //       },
  //       FlatTags: "****=work on opentofu",
  //     },
  //   },
  // },
  // {
  //   data: {
  //     id: "demo-user",
  //     label: "demo-user",
  //     level: 2,
  //     details: {
  //       UserName: "demo-user",
  //       CreateDate: "2025-04-29 11:40",
  //       Arn: "arn:aws:iam::430118819650:user/demo-user",
  //       mfaEnabled: "False",
  //       AccessKeys: "****",
  //       AccessKeyLastUsed: "None",
  //       region: "None",
  //       service_name: "None",
  //       AttachedPolicies: "",
  //       Groups: "",
  //       HasConsolePassword: "False",
  //       Tags: {},
  //       FlatTags: "****",
  //     },
  //   },
  // },
  // {
  //   data: {
  //     id: "no-mfa-1",
  //     label: "No MFA",
  //     level: "Warnings",
  //     details: {
  //       name: "Increased Vulnerability to Unauthorized Access,Credential Stuffing and Brute Force Attacks",
  //       attacks_id: "T1110.004",
  //     },
  //   },
  // },
  // {
  //   data: {
  //     id: "no-mfa-2",
  //     label: "No MFA",
  //     level: "Warnings",
  //     details: {
  //       name: "Increased Vulnerability to Unauthorized Access,Credential Stuffing and Brute Force Attacks",
  //       attacks_id: "T1110.004",
  //     },
  //   },
  // },
  // {
  //   data: {
  //     id: "T1110-041",
  //     label: "T1110",
  //     level: "Attacks",
  //     details: {
  //       Desc: "Data Destruction,encrypting data to make it inaccessible",
  //       attacks_id: "T1110-T11141",
  //     },
  //   },
  // },
  // {
  //   data: {
  //     id: "T1110-042",
  //     label: "T1110",
  //     level: "Attacks",
  //     details: {
  //       Desc: "Data Destruction,encrypting data to make it inaccessible",
  //       attacks_id: "T1110-T11142",
  //     },
  //   },
  // },
  {
    data: {
      id: "i-06dcc9",
      label: "i-06dcc9",
      level: 2,
      details: {
        id: "i-06dcc92d8c007f7",
        type: "t2.micro",
        platform: "Windows",
        state: "running",
        subnetId: "subnet-0ec35fad2f2a82bb5",
        vpcId: "vpc-0f2d098e1d0a74e93",
        securityGroupId: "sg-02db72b524062e8b1",
        securityGroupName: " demo_win_sg",
        ebsEncryption: false,
      },
    },
  },
  {
    data: {
      id: "sg_0f7de-1",
      label: "sg_0f7de",
      level: 2,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
  },
  {
    data: {
      id: "sg_0f7de-2",
      label: "sg_0f7de",
      level: 2,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
  },
  {
    data: {
      id: "openports-7",
      label: "openports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "openports-8",
      label: "openports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "no-mfa-1",
      label: "No MFA",
      level: "Warnings",
      details: {
        name: "Increased Vulnerability to Unauthorized Access,Credential Stuffing and Brute Force Attacks",
        attacks_id: "T1110.004",
      },
    },
  },
  // {
  //   data: {
  //     id: "user-iam",
  //     source: "Prod-User",
  //     target: "iam-1",
  //     label: "Has_resource",
  //   },
  // },
  {
    data: {
      id: "user-iam-1",
      source: "Prod-User",
      target: "ec2-1",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "user-iam-2",
      source: "Prod-User",
      target: "s3-1",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "s3-1-neo4j",
      source: "s3-1",
      target: "neo4j",
      label: "Has_buckets",
    },
  },
  {
    data: {
      id: "Acls-neo4j",
      source: "neo4j",
      target: "ACLs",
      label: "No_proper_ACLs",
    },
  },
  {
    data: {
      id: "no-enryption-neo4j",
      source: "No Encryption",
      target: "neo4j",
      label: "No_Encryption",
    },
  },
  // {
  //   data: {
  //     id: "neo4j-No Versioning",
  //     source: "neo4j",
  //     target: "No Versioning",
  //     label: "No_Encryption",
  //   },
  // },
  {
    data: {
      id: "T1583-ACLs",
      source: "T1583",
      target: "ACLs",
      label: "leads_to",
    },
  },
  {
    data: {
      id: "T1485-No Encryption",
      source: "T1485",
      target: "No Encryption",
      label: "leads_to",
    },
  },
   {
    data: {
      id: "T1110-041-no-mfa-1",
      source: "T1110-041",
      target: "no-mfa-1",
      label: "leads_to",
    },
  },
  // {
  //   data: {
  //     id: "iam-1-techvito-user",
  //     source: "iam-1",
  //     target: "techvito-user",
  //     label: "has_iam_users",
  //   },
  // },
  // {
  //   data: {
  //     id: "iam-1-guest-user",
  //     source: "iam-1",
  //     target: "guest-user",
  //     label: "has_iam_users",
  //   },
  // },
  // {
  //   data: {
  //     id: "iam-1-demo-user",
  //     source: "iam-1",
  //     target: "demo-user",
  //     label: "has_iam_users",
  //   },
  // },
  // {
  //   data: {
  //     id: "no-mfa-1-demo-user",
  //     source: "no-mfa-1",
  //     target: "demo-user",
  //     label: "No_MFA_enabled",
  //   },
  // },
  // {
  //   data: {
  //     id: "no-mfa-2-guest-user",
  //     source: "no-mfa-2",
  //     target: "guest-user",
  //     label: "No_MFA_enabled",
  //   },
  // },
  // {
  //   data: {
  //     id: "T1110-041-no-mfa-1",
  //     source: "T1110-041",
  //     target: "no-mfa-1",
  //     label: "leads_to",
  //   },
  // },
  // {
  //   data: {
  //     id: "T1110-042-no-mfa-2",
  //     source: "T1110-042",
  //     target: "no-mfa-2",
  //     label: "leads_to",
  //   },
  // },
  {
    data: {
      id: "ec2-1-i-06dcc9",
      source: "ec2-1",
      target: "i-06dcc9",
      label: "has_instances",
    },
  },
  {
    data: {
      id: "i-06dcc9-sg_0f7de-1",
      source: "i-06dcc9",
      target: "sg_0f7de-1",
      label: "has_sec_group_rules",
    },
  },
  {
    data: {
      id: "i-06dcc9-sg_0f7de-2",
      source: "i-06dcc9",
      target: "sg_0f7de-2",
      label: "has_sec_group_rules",
    },
  },
  {
    data: {
      id: "openports-7-sg_0f7de-1",
      source: "openports-7",
      target: "sg_0f7de-1",
      label: "has_sec_group_rules",
    },
  },
  {
    data: {
      id: "openports-8-sg_0f7de-2",
      source: "openports-8",
      target: "sg_0f7de-2",
      label: "has_sec_group_rules",
    },
  },

       {
    data: {
      id: "openports-8-no-mfa-1",
      source: "no-mfa-1",
      target: "openports-8",
      label: "Warnings",
    },
  },

];


export const multiCloudGraphs = [
  {data:{id:"Cloud", label: "Cloud", level:1, details:{Type: "Cloud"}}},
  {data:{id:"AWS", label: "AWS", level:"Multi cloud", details:{Type: "AWS"}}},
  {data:{id:"Azure", label: "Azure", level:"Multi cloud", details:{Type: "Azure"}}},
  {data:{id:"Security Groups", label: "Security Groups", level:3, details:{ Resource: "Security Group"}}},
  {data:{id:"S3", label: "S3", level:3, details:{ Resource: "S3"}}},
  {data:{id:"EC2", label: "EC2", level:3, details:{ Resource: "EC2"}}},
  {data:{id:"Lambda", label: "Lambda", level:3, details:{ Resource: "Lambda"}}},
  {data:{id:"IAM", label: "IAM", level:3, details:{ Resource: "IAM"}}},
  {data:{id:"Subnets", label: "Subnets", level:3, details:{ Resource: "Subnets"}}},
  {data:{id:"Vpcs", label: "Vpcs", level:3, details:{ Resource: "Vpcs"}}},
  {data:{id:"sg-08361", label: "sg-08361", level:4, details:{ SecurityGroupRuleId: "sgr-00394613f2ecc194c", GroupId: "sg-081b2cd3194bfc9c0",
          GroupOwnerId: '430118819650',
          IsEgress: "True",
          IpProtocol: "-1",
          FromPort: -1,
          ToPort: -1,
          CidrIpv4: "0.0.0.0/0",
          SecurityGroupRuleArn:
            'arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c'},}},
  {data:{id:"openports-3", label: "openports", level:"Open Ports", details:{  name: 'using alternative protocols to exfiltrate data',
          warning_id: '122 - 126'}}},
  // {data:{id:"openports-6", label: "openports", level:"Open Ports", 
  //   details:{
  //      name: 'using alternative protocols to exfiltrate data'}}},
     {data: {
        id: "neo4j",
        label: "neo4j-de",
        level: 2,
        details: {
        bucket: "demo-neo4j-backend",
          versioning: "Enabled",
          bucket_Encryption: false,
          permission: "FULL_CONTROL",
          lifecycle_rule_name: "None",
          lifecycle_rule_status: "None",
          lifecycle_transitions: "None", 
        },
      },
    },
    {data:
    {
        id: "ACLs",
        label: "ACLs",
        level: 5,
        details: {
          name: 'Acquire and Compromise Infrastructure(DNS)',
          attacks_id: 'T1583'
           },
      },
    },
    {data:
        {
        id: "No Encryption",
        label: "No Encryption",
        level: 5,
        details: {
          name: 'No Encryption', 
          desc: 'Data Destruction,encrypting data to make it inaccessible',
          attacks_id: 'T1485'
         },
      },
    },
    {data:
        {
        id: "No Versioning",
        label: "No Versioning",
        level: 5,
        details: {
          name: 'No histroy,limited Recovery and Data Loss Risk',
        
           },
      },
    },
    
    {data:
        {
        id: "T1583",
        label: "T1583",
        level: "Attacks",
        details: {
          Desc: "Data Destruction,encrypting data to make it inaccessible",
          attacks_id: 'T1583 - T1584'
        },
      },
    },
    
    {data: 
      {
        id: "T1485",
        label: "T1485",
        level: "Attacks",
        details: {
          Desc: "Data Destruction,encrypting data to make it inaccessible",
          attacks_id: 'T1485-T1486',
        },
      },
    },
    
    {data: 
        {
        id: "i-06dcc9",
        label: "i-06dcc9",
        level: 2,
        details: {
          id: "i-06dcc92d8c007f7",
          type: "t2.micro",
          platform: "Windows",
          state: "running",
          subnetId: "subnet-0ec35fad2f2a82bb5",
          vpcId: "vpc-0f2d098e1d0a74e93",
          securityGroupId: "sg-02db72b524062e8b1",
          securityGroupName: " demo_win_sg",
          ebsEncryption: false
        },
      },
    },
    
    {data:
        {
        id: "sg_0f7de-5",
        label: "sg_0f7de",
        level: 2,
        details: {
          SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
          GroupId: "sg-0f7de2cd3194bfc9c0",
          GroupOwnerId: "430118819650",
          IsEgress: "True",
          IpProtocol: "-1",
          FromPort: -1,
          ToPort: -1,
          CidrIpv4: "0.0.0.0/0",
          SecurityGroupRuleArn:
            'arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c'
        },
      },
    },
    
    {data: 
        {
        id: "openports-11",
        label: "openports",
        level: "Open Ports",
        details: {
          name: 'using alternative protocols to exfiltrate data'
        },
      },
    },
    
    {data: 
        {
        id: "techvito-user",
        label: "techvito-user",
        level: 2,
        details: {
          UserName: "techvito-user",
          CreateDate: "2024-08-29T05:40:57+00:00",
          Arn: "arn:aws:iam::430118819650:user/techvito-user",
          mfaEnabled: "True",
          AccessKeys: "****",
          AccessKeyLastUsed: "2026-01-10 12:45",
          region: "ap-south-1",
          service_name: "s3",
          AttachedPolicies:
            "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
          Groups:
            "iam-full-access, techvito-developers, billing-access-read-only",
          HasConsolePassword: "True",
          Tags: {
            "****": "work on opentofu",
          },
          FlatTags: '****=work on opentofu',
        },
      },
    },
    
    {data: 
        {
        id: "guest-user",
        label: "guest-user",
        level: 2,
        details: {
          UserName: "guest-user",
          CreateDate: "2024-08-29T05:40:57+00:00",
          Arn: "arn:aws:iam::430118819650:user/guest-user",
          mfaEnabled: "True",
          AccessKeys: "****",
          AccessKeyLastUsed: "2026-01-07 12:45",
          region: "ap-south-1",
          service_name: "s3",
          AttachedPolicies:
            "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
          Groups:
            "iam-full-access, techvito-developers, billing-access-read-only",
          HasConsolePassword: "True",
          Tags: {
            "****": "work on opentofu",
          },
          FlatTags: '****=work on opentofu',
        },
      },
    },
    
    {data: 
        {
        id: "no-mfa-2",
        label: "No MFA",
        level: 4,
        details: {
          name: 'Increased Vulnerability to Unauthorized Access,Credential Stuffing and Brute Force Attacks',
          attacks_id: 'T1110.004'
           },
      },
    },
    
    {data: 
        {
        id: "T1110-042",
        label: "T1110",
        level: "Attacks",
        details: {
          Desc: "Data Destruction,encrypting data to make it inaccessible",
          attacks_id: 'T1485-T1486',
        },
      },
    },
    
    {data: 
        {
        id: "122",
        label: "122",
        level: "Warnings",
        details: {
          Desc: "using alternative protocols to exfiltrate data",
          elementId: '4:ae75adbe-1aa8-4903-8979-e6c0006423da:122',
        },
      },
    },
    {data: 
        {
        id: "126",
        label: "126",
        level: "Warnings",
        details: {
          Desc: "using alternative protocols to exfiltrate data",
          elementId: '4:ae75adbe-1aa8-4903-8979-e6c0006423da:126',
        },
      },
    },
    
    {data: 
        {
          id:"vm",
          label: "vm",
          level:2,
          details: {
              Type: 'VM',
            },
      },	
    },
    
    {data:
    {
          id:"Blob Storage",
          label: "Blob Storage",
          level:3,
          details: {
              Type: 'Blob Storage',
            },
      },
    },
    {data:
     {
          id:"VM-01",
          label: "VM-01",
          level:2,
          details: {
              Name: "VM-01",
              location: "centralindia",
              resourceGroup: "myresource_grp",
              timeCreated: "2025-12-18T06:24:53.540779+00:00",
              type: "Microsoft.Compute/virtualMachines",
              vmId: "d7149587-0350-4bf6-8fa7-88bdf3aca1ba",
              provisioningState: "Succeeded",
              Zone: "1"
            },
      },
    },
    {data:
      {
          id:"VM-02",
          label: "VM-02",
          level:2,
          details: {
              Name: "VM-02",
              location: "eastasia",
              resourceGroup: "myresource_grp",
              timeCreated: "2026-12-25T07:33:38.631363+00:00",
              type: "Microsoft.Compute/virtualMachines",
              vmId: "a8c7c2a1-fd72-47ae-8a31-968aa1f82488",
              provisioningState: "Succeeded",
              zones: "null"
            },
      },
    },
    {data:
      {
          id:"azaccountstorage",
          label: "azaccountstorage",
          level:2,
          details: {
              location: "centralindia",
              allowBlobPublicAccess: false,
              allowedCopyScope: "PrivateLink",
              storage_type: "StorageV2",
              type: "Microsoft.Storage/storageAccounts",
              largeFileSharesState: "Enabled",
              publicNetworkAccess: "Enabled",
              resourceGroup: "myresource_grp",
              primaryLocation: "centralindia",
              secondaryLocation: "southindia"
            },
      },
    },
     {data:
      {
          id:"AllowAzureLoadBalancerInBound",
          label: "AllowInBound",
          level:2,
          details: {
            access: "Allow",
            description: "Allow inbound traffic from azure load balancer",
            destinationAddressPrefix: "*",
            direction: "Inbound",
            protocol: "*",
            resourceGroup: "myresource_grp",
            sourceAddress: "AzureLoadBalancer",
            sourcePortRange: "*",
            type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
            },
      },
    },
    {data:
      {
          id:"DenyAllInBound",
          label: "DenyInbound",
          level:2,
          details: {
            access: "Deny",
            description: "Deny all inbound traffic",
            destinationAddressPrefix: "*",
            direction: "Inbound",
            protocol: "*",
            resourceGroup: "myresource_grp",
            sourceAddress: "AzureLoadBalancer",
            sourcePortRange: "*",
            type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
            },
      },
    },
    {data:
      {
          id:"publicNetworkAccess",
          label: "publicNetworkAccess",
          level:2,
          details:{
              name: "Enabled publicNetworkAccess",
              desc: 'With publicNetworkAccess enabled, anyone can attempt to access your storage account from any network, greatly increasing the risk of unauthorized access'
          }
      },
    },
    {data: 
      {
          id:"protocols",
          label: "protocols",
          level:5,
          details:{
              desc: 'severely compromise security by creating broad openings for potential threats.'
          }
      },
    },
    {data:
      {
          id:"unrestricted_protocol",
          label: "unrestricted protocol",
          level:5,
          details:{
              name: "can expose resources to attacks, such as denial-of-service (DoS) or amplification attacks" , 
             attacks_id: 'T1048'
          }
      },
    },
    {data:
      {
          id:"Public_Access",
          label: "Public Access",
          level:5,
          details:{
              name: "simple data breaches to more sophisticated intrusions involving malicious uploads or unauthorized access to sensitive data" , 
             attacks_id: 'T1048'
          }
      },
    },
    
    
     {
      data: {
        id: "Cloud-AWS",
        source: "Cloud",
        target: "AWS",
        label: "Has_Resource",
      },
    },
       {
      data: {
        id: "Cloud-Azure",
        source: "Cloud",
        target: "Azure",
        label: "Has_Resource",
      },
    },
    
         {
      data: {
        id: "AWS-Security Groups",
        source: "AWS",
        target: "Security Groups",
        label: "Has_Resource",
      },
    },
    
           {
      data: {
        id: "AWS-S3",
        source: "AWS",
        target: "S3",
        label: "Has_Resource",
      },
    },
           {
      data: {
        id: "AWS-EC2",
        source: "AWS",
        target: "EC2",
        label: "Has_Resource",
      },
    },
           {
      data: {
        id: "AWS-Lambda",
        source: "AWS",
        target: "Lambda",
        label: "Has_Resource",
      },
    },
           {
      data: {
        id: "AWS-IAM",
        source: "AWS",
        target: "IAM",
        label: "Has_Resource",
      },
    },
           {
      data: {
        id: "AWS-Subnets",
        source: "AWS",
        target: "Subnets",
        label: "Has_Resource",
      },
    },
    
             {
      data: {
        id: "AWS-Vpcs",
        source: "AWS",
        target: "Vpcs",
        label: "Has_Resource",
      },
    },
    
               {
      data: {
        id: "sg-08361-Security Groups",
        source: "sg-08361",
        target: "Security Groups",
        label: "Has_sec_grps",
      },
    },
                 {
      data: {
        id: "openports-3-sg-08361",
        source: "openports-3",
        target: "sg-08361",
        label: "No_proper_firewalls",
      },
    },
    {
        data: {
        id: "S3-neo4j",
        source: "S3",
        target: "neo4j",
        label: "Has_buckets",
      },
    },
      {
        data: {
        id: "ACLs-neo4j",
        source: "ACLs",
        target: "neo4j",
        label: "No_proper_ACLs",
      },
    },
    
        {
        data: {
        id: "No Encryption-neo4j",
        source: "No Encryption",
        target: "neo4j",
        label: "No_Encryption",
      },
    },
    
          {
        data: {
        id: "No Versioning-neo4j",
        source: "No Versioning",
        target: "neo4j",
        label: "No_Versioning",
      },
    },
    
            {
        data: {
        id: "T1583-ACLs",
        source: "T1583",
        target: "ACLs",
        label: "leads_to",
      },
    },
              {
        data: {
        id: "T1485-No Encryption",
        source: "T1485",
        target: "No Encryption",
        label: "leads_to",
      },
    },
    
                {
        data: {
        id: "EC2-i-06dcc9",
        source: "EC2",
        target: "i-06dcc9",
        label: "has_instances",
      },
    },
    
                  {
        data: {
        id: "EC2-i-06dcc9",
        source: "EC2",
        target: "i-06dcc9",
        label: "has_instances",
      },
    },
    
                    {
        data: {
        id: "i-06dcc9-sg_0f7de-5",
        source: "i-06dcc9",
        target: "sg_0f7de-5",
        label: "has_sec_group_rules",
      },
    },
    
                      {
        data: {
        id: "openports-11-sg_0f7de-5",
        source: "openports-11",
        target: "sg_0f7de-5",
        label: "No_proper_firewalls",
      },
    },
    
     {data: {id:"IAM-techvito-user", source: "IAM", target: "techvito-user", label: "has_iam_users" }},
      {data: {id:"IAM-guest-user", source: "IAM", target: "guest-user", label: "has_iam_users" }},
      {data: {id:"nomfa-2-guest-user", source: "no-mfa-2", target: "guest-user", label: "No_MFA_enabled" }},
      {data:{id:"T1110-042-no-mfa-2", source: "T1110-042", target: "no-mfa-2", label: "leads_to" }},
      {data: {id:"122-operports-3", source: "122", target: "openports-3", label: "leads_to" }},
      {data: {id:"126-operports-3", source: "126", target: "openports-3", label: "leads_to" }},
    {data:{id:"Azure-vm", source: "Azure", target: "vm", label: "resources" }},
      {data: {id:"Azure-Blob Storage", source: "Azure", target: "Blob Storage", label: "resources" }},
      {data: {id:"vm-VM-01", source: "vm", target: "VM-01", label: "has_virtualmachines" }},
      {data: {id:"vm-VM-02", source: "vm", target: "VM-02", label: "has_virtualmachines" }},
      {data: {id:"Blob Storage-azaccountstorage", source: "Blob Storage", target: "azaccountstorage", label: "has_storage" }},
    {data: {id:"azaccountstorage-publicNetworkAccess", source: "azaccountstorage", target: "publicNetworkAccess", label: "weak_configurations" }},
      {data: {id:"VM-01-AllowAzureLoadBalancerInBound", source: "VM-01", target: "AllowAzureLoadBalancerInBound", label: "weak_configurations" }},
      {data: {id:"VM-02-DenyAllInBound", source: "VM-02", target: "DenyAllInBound", label: "weak_configurations" }},
      {data: {id:"protocols-unrestricted_protocol", source: "protocols", target: "unrestricted_protocol", label: "leads_to" }},
      {data: {id:"publicNetworkAccess-Public_Access", source: "publicNetworkAccess", target: "Public_Access", label: "leads_to" }},
      {data: {id:"AllowAzureLoadBalancerInBound-protocols", source: "AllowAzureLoadBalancerInBound", target: "protocols", label: "Weakconfigurations" }},
    
    
  ]

  export const Techvitouser = [
  {
    data: {
      id: "Techvito-user",
      label: "Techvito-user",
      level: 1,
      details: {
        Name: "Techvito-user",
        Type: "Admin",
      },
    },
  },
  {
    data: {
      id: "s3-1",
      label: "S3",
      level: 2,
      details: {
        Name: "s3",
        AccessType: "Full Write Access",
      },
    },
  },
  {
    data: {
      id: "ec2-1",
      label: "Ec2",
      level: 2,
      details: {
        Name: "Ec2",
        AccessType: "Full Write Access",
      },
    },
  },
  {
    data: {
      id: "neo4j",
      label: "neo4j-de",
      level: 2,
      details: {
        bucket: "demo-neo4j-backend",
        versioning: "Enabled",
        bucket_Encryption: false,
        permission: "FULL_CONTROL",
        lifecycle_rule_name: "None",
        lifecycle_rule_status: "None",
        lifecycle_transitions: "None",
      },
    },
  },

  {
    data: {
      id: "ACLs",
      label: "ACLs",
      level: 2,
      details: {
        name: "Acquire and Compromise Infrastructure(DNS)",
        attacks_id: "T1583",
      },
    },
  },
  // {
  //   data: {
  //     id: "No Encryption",
  //     label: "No Encryption",
  //     level: 2,
  //     details: {
  //       name: "No Encryption",
  //       desc: "Data Destruction,encrypting data to make it inaccessible",
  //       attacks_id: "T1485",
  //     },
  //   },
  // },

  {
    data: {
      id: "T1583",
      label: "T1583",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1583-T1584",
      },
    },
  },
  {
    data: {
      id: "T1485",
      label: "T1485",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1583-T1584",
      },
    },
  },
    {
    data: {
      id: "T1110-041",
      label: "T1110",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1110-T11141",
      },
    },
  },

  {
    data: {
      id: "i-06dcc9",
      label: "i-06dcc9",
      level: 2,
      details: {
        id: "i-06dcc92d8c007f7",
        type: "t2.micro",
        platform: "Windows",
        state: "running",
        subnetId: "subnet-0ec35fad2f2a82bb5",
        vpcId: "vpc-0f2d098e1d0a74e93",
        securityGroupId: "sg-02db72b524062e8b1",
        securityGroupName: " demo_win_sg",
        ebsEncryption: false,
      },
    },
  },
  {
    data: {
      id: "sg_0f7de-1",
      label: "sg_0f7de",
      level: 2,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
  },
  {
    data: {
      id: "sg_0f7de-2",
      label: "sg_0f7de",
      level: 2,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
  },
  {
    data: {
      id: "openports-7",
      label: "openports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "openports-8",
      label: "openports",
      level: "Open Ports",
      details: {
        name: "using alternative protocols to exfiltrate data",
      },
    },
  },
  {
    data: {
      id: "no-mfa-1",
      label: "No MFA",
      level: "Warnings",
      details: {
        name: "Increased Vulnerability to Unauthorized Access,Credential Stuffing and Brute Force Attacks",
        attacks_id: "T1110.004",
      },
    },
  },

  {
    data: {
      id: "user-iam-1",
      source: "Techvito-user",
      target: "ec2-1",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "user-iam-2",
      source: "Techvito-user",
      target: "s3-1",
      label: "Has_resource",
    },
  },
  {
    data: {
      id: "s3-1-neo4j",
      source: "s3-1",
      target: "neo4j",
      label: "Has_buckets",
    },
  },
  {
    data: {
      id: "Acls-neo4j",
      source: "neo4j",
      target: "ACLs",
      label: "No_proper_ACLs",
    },
  },
  // {
  //   data: {
  //     id: "no-enryption-neo4j",
  //     source: "No Encryption",
  //     target: "neo4j",
  //     label: "No_Encryption",
  //   },
  // },

  {
    data: {
      id: "T1583-ACLs",
      source: "T1583",
      target: "ACLs",
      label: "leads_to",
    },
  },
  {
    data: {
      id: "T1485-openports-7",
      source: "T1485",
      target: "openports-7",
      label: "leads_to",
    },
  },
   {
    data: {
      id: "T1110-041-no-mfa-1",
      source: "T1110-041",
      target: "no-mfa-1",
      label: "leads_to",
    },
  },

  {
    data: {
      id: "ec2-1-i-06dcc9",
      source: "ec2-1",
      target: "i-06dcc9",
      label: "has_instances",
    },
  },
  {
    data: {
      id: "i-06dcc9-sg_0f7de-1",
      source: "i-06dcc9",
      target: "sg_0f7de-1",
      label: "has_sec_group_rules",
    },
  },
  {
    data: {
      id: "i-06dcc9-sg_0f7de-2",
      source: "i-06dcc9",
      target: "sg_0f7de-2",
      label: "has_sec_group_rules",
    },
  },
  {
    data: {
      id: "openports-7-sg_0f7de-1",
      source: "openports-7",
      target: "sg_0f7de-1",
      label: "has_sec_group_rules",
    },
  },
  {
    data: {
      id: "openports-8-sg_0f7de-2",
      source: "openports-8",
      target: "sg_0f7de-2",
      label: "has_sec_group_rules",
    },
  },

       {
    data: {
      id: "openports-8-no-mfa-1",
      source: "no-mfa-1",
      target: "openports-8",
      label: "Warnings",
    },
  },

];