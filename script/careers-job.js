
    // { id: 4, list: []},
const qualifications  = [
    { id: 1,  list: [ "Requires CPA certification", "Holds a minimum of 9 years of extensive audit experience in global audit firms", "Has proven working experience as an Audit Manager, managing and leading audit teams", "Has outstanding project management, communication, leadership, coaching, and  supervisory skills", "Displays effective interpersonal, risk management, facilitation, and presentation skills", "Has the ability to develop and maintain client relationships", ]},
    { id: 2,  list: [ "Requires CPA certification", "Holds a minimum of 7 years of extensive audit experience in global audit firms", "Has in-depth knowledge of audit procedures and principles", "Displays excellent attention to detail, problem-solving, and analytical capabilities", "Can manage multiple engagements and meet deadlines", "Possesses outstanding written and verbal communication, client service, project management, and leadership skills", ]},
    { id: 3,  list: [ "Holds a Bachelor's degree in Accountancy", "CPA certification is preferred", "Has a minimum of 3 years of audit experience in global firms, including 1 busy season as a senior", "Has advanced knowledge of audit procedures and principles", "Displays great attention to detail, problem-solving, and analytical capabilities", "Exhibits good leadership skills", "Possesses strong written and verbal communication, client service, and organizational skills", ]},
    { id: 4,  list: [ "Graduated with a Bachelor's degree in Accountancy", "Has at least 1 busy season audit experience in global audit firms", "Has basic knowledge of audit procedures and principles", "Possesses strong written and verbal communication, client service, and organizational skills", "Displays great attention to detail", "Can work independently and in a team environment" ]},
    { id: 5,  list: [ "With at least 7 years of progressive experience in Accounting and Finance and must have held supervisory position" ,"With experience in monthly close process and review and preparation of Financial Statements" ,"Must have an advanced understanding of financial reporting standards " ,"Advanced knowledge in MS Applications especially Excel" ,"With excellent time-management, organizational, communication, and analytical skills" ,"Knowledge of accounting software, such as QuickBooks, is an advantage" ,"Ability to manage time to meet deadlines has great attention to detail and can cope well with a fast-paced environment"]},
    { id: 6,  list: [ "Graduate of any Finance, Commerce, Accounting, or any business-related course" ,"Bachelor’s degree in accountancy is a plus " ,"With at least 5 years of experience in general accounting" ,"Knowledge of accounting software, such as QuickBooks, is an advantage" ,"Must have an advanced understanding of financial reporting standards " ,"Outstanding computer skills with advanced knowledge in Excel " ,"With great attention to detail and has strong organizational, communication, and project management skills"]},
    { id: 7 , list: [ "Graduate of any four-year degree in Finance, Commerce, Accounting, or any business-related course" ,"Bachelor’s degree in accountancy is a plus " ,"With at least 3 years of experience of end-to-end bookkeeping experience " ,"Knowledge of accounting software, such as QuickBooks, is an advantage" ,"Must have an advanced understanding of financial reporting standards " ,"Strong computer skills with advanced knowledge in Excel " ,"Able to balance multiple clients that may be in different industries " ,"With great attention to detail and has strong organizational, communication, and project management skills"]},
    { id: 8,  list: [ "Bachelor’s Degree; or six months to one-year related experience and/or training; or equivalent combination of education and experience. Graduate of any Finance, Commerce, Accounting or any business-related course (such as: Business Management Accounting, Financial Management and Accounting Technology)" ,"Bachelor’s degree in accountancy is a plus" ,"Have a clear understanding of financial reporting standards" ,"With great attention to details and has strong project management skills" ,"Knowledge of accounting software, such as QuickBooks, is a plus" ,"Ability to prioritize day to day task to meet deadlines and able to cope well with a fast-paced environment"]},
    { id: 9, list: [ "Requires CISA/CIA certification and preferably CPA certification" ,"Holds a minimum of 9 years of IT Audit experience, with proven experience in managerial role" ,"Has expert-level knowledge of information systems auditing","Demonstrates in-depth understanding of General IT Controls areas and IT Governance, Risk, and Compliance frameworks (COBIT, COSO)","Has extensive experience in assessing System and Organization Controls (SOC) Reporting – SOC1 Type I/Type II, SOC2 Type I/Type II, and SOC3 reports","Possesses advanced knowledge of key IT and information security topics","Demonstrates expert-level knowledge of IT controls and auditing standards","Displays excellent attention to detail, problem-solving, and analytical capabilities","Exhibits strong leadership skills, with the ability to manage and develop supervisors and staff","Possesses strong written and verbal communication, client service, and organizational skills"]},
    { id: 10, list: [ "Possesses at least 7 years of IT audit experience" ,"Hold a Bachelor's degree in Information Systems, Accounting, or related field" ,"Requires an active CISA/CIA certification, CPA certification is an advantage","Has advanced knowledge of information systems auditing","Demonstrates strong understanding of General IT Controls areas and IT Governance, Risk, and Compliance frameworks (COBIT, COSO)","Has significant experience in assessing System and Organization Controls (SOC) Reporting – SOC1 Type I/Type II, SOC2 Type I/Type II, and SOC3 reports","Possesses strong knowledge of key IT and information security topics","Able to understand complex financial applications and security policies","Demonstrates in-depth knowledge of IT controls and auditing standards","Displays excellent attention to detail, problem-solving, and analytical capabilities","Exhibits strong leadership skills, with the ability to supervise and develop staff","Possesses excellent written and verbal communication, client service, and organizational skills"]},
    { id: 11, list: [ "Has a minimum of 3 years of extensive IT audit experience in global audit firms" ,"Holds a Bachelor's degree in Information Systems, Accounting, or related field" ,"Currently possesses an active CISA/CIA certification or is pursuing one, CPA certification is an advantage","Has a good knowledge of information systems auditing ","Demonstrate strong understanding of General IT Controls areas and IT Governance, Risk, and Compliance framework (COBIT, COSO)","Has a developing experience in assessing System and Organization Controls (SOC) Reporting – SOC1 Type I/Type II, SOC2 Type I/Type II, and SOC3 reports","Has a developing experience and knowledge of key IT and information security topics","Able to understand complex financial applications and security policies ","Demonstrates knowledge of IT controls and auditing standards","Displays great attention to detail, problem-solving, and analytical capabilities","Exhibits good leadership skills","Possesses strong written and verbal communication, client service, and organizational skills"]},
    { id: 12, list: [ "Has a minimum of 1 year of extensive IT audit experience in global audit firms", "Holds a Bachelor's degree in Information Systems, Accounting, or related field" ,"Currently possesses an active CISA/CIA certification or is pursuing one" ,"Demonstrates knowledge of IT controls and auditing standards","Be familiar with auditing software and tools","Exhibits strong analytical and technical skills","Possesses strong communication skills "]},
    { id: 13, list: [ "Requires a CPA certification and preferably other tax certifications" ,"Holds a minimum of 9 years of tax experience, with proven experience in managerial role" ,"Demonstrates excellent leadership, strategic thinking, and project management skills, in addition to attention to detail, results-orientation, adaptability, diligence, and teamwork","Have an advanced understanding of financial reporting standards and tax laws and regulations","Proficient in tax software (CCH, Thomson, etc.) and able to implement new technologies.","Possesses excellent written and verbal communication skills, with the ability to communicate complex tax concepts"]},
    { id: 14, list: [ "Requires a CPA certification and preferably other tax certifications" ,"Holds a minimum of 7 years of tax experience" ,"Has an advanced understanding of financial reporting standards and tax laws and regulations","Demonstrates strong leadership, coaching, and project management skills, in addition to attention to detail, results-orientation, adaptability, diligence, and teamwork","Proficiency in tax software (CCH, Thomson, etc.) and able to train others","Displays excellent analytical, organizational, and leadership skills"]},
    { id: 15, list: [ "Has at least 3 years of tax preparation experience" ,"Holds a Bachelor's degree in Accountancy" ,"Currently possesses an active CPA certification or is pursuing one, preferably with other tax certifications","Demonstrates strong attention to detail, results-oriented approach, adaptability, diligence, and teamwork skills","Has a clear understanding of financial reporting standards and tax laws and regulations. ","Proficient in tax software (CCH, Thomson, etc.)","Displays strong analytical and organizational skills","Able to prioritize day-to-day tasks to meet deadlines and able to cope well with a fast-paced environment"]},
    { id: 16, list: [ "Has at least 1 year of tax preparation experience" ,"Holds a Bachelor's degree in Accountancy" ,"Currently possesses an active CPA certification or is pursuing one, preferably with other tax certifications","Demonstrates great attention to detail, results-oriented approach, adaptability, diligence, and teamwork skills","Has a clear understanding of financial reporting standards and tax laws and regulations. ","Proficient in tax software (CCH, Thomson, etc.)","Displays strong analytical and organizational skills","Able to prioritize day-to-day tasks to meet deadlines and able to cope well with a fast-paced environment"]},
    { id: 17 , list: [ "Possesses at least 11 years of comprehensive HR experience" ,"Holds a Bachelor's degree in Human Resources, Business, or related field" ,"Holds an active SHRM/PHR certification" ,"Demonstrates expert knowledge of HR laws and regulations" ,"Exhibits excellent communication, organizational, and leadership skills" ,"Has the ability to handle confidential and sensitive information" ,"Possesses proven business acumen and strategic thinking"]},
    { id: 18, list: [ "" ,"" ,"","","",""]},
    { id: 19, list: [ "" ,"" ,"","","",""]},
    { id: 20, list: [ "" ,"" ,"","","",""]},
    { id: 21, list: [ "" ,"" ,"","","",""]},
    { id: 22, list: [ "" ,"" ,"","","",""]},
    { id: 23, list: [ "Holds Bachelor’s degree in Computer Science, Information Technology, or similar" ,"Demonstrates proven experience in providing information technology support" ,"Possesses knowledge of computer hardware, software, and networks","Exhibits intermediate proficiency in Office 365, Adobe Acrobat, and SharePoint functionalities","Demonstrates an advanced understanding of Active Directory","Displays strong analytical, diagnostic, and problem-solving skills","Exhibits excellent interpersonal communication skills","Willing to work onsite if required","Preferably resides in Makati or nearby cities such as Mandaluyong, Manila, Pasig, Alabang, and Pasay"]},
    { id: 24, list: [ "" ,"" ,"","","",""]},
    { id: 25, list: [ "" ,"" ,"","","",""]},
    { id: 26, list: [ "" ,"" ,"","","",""]},
    { id: 27, list: [ "" ,"" ,"","","",""]},
    { id: 28, list: [ "" ,"" ,"","","",""]},
    { id: 29, list: [ "" ,"" ,"","","",""]},
    
    
]
    // { id: 4, list: []},
const resposibilities = [
    { id: 1,  list: [ "Plan and oversee a portfolio of audit engagements", "Manage multiple audit teams", "Build and maintain relationships with key clients", "Provide guidance and advice on complex accounting and audit matters", "Collaborate with senior management to develop audit strategies and objectives", "Keep abreast of emerging trends and changes in auditing practices", "Review and finalize audit reports", "Ensure compliance with audit standards and regulatory requirements", ]},
    { id: 2,  list: [ "Oversee small to medium-sized audit engagements simultaneously", "Manage a team of Audit Associates and Senior Audit Associates", "Review work prepared by audit team members, and provide review comments as appropriate", "Identify areas for process improvements and implementing best practices", "Perform testing of complex audit areas as determined by the Audit Manager and Audit Partner/Director", "Review all audit documentation prepared by supervised personnel and initials on all audit documentation", "Ensure compliance with audit standards and regulatory requirements", "Maintain awareness and understanding of developments in the auditing field and in client industries", ]},
    { id: 3,  list: [ "Assist the audit team in planning the audit, executing the audit program, and preparing financial reports", "Review work papers and documentation prepared by Audit Associates", "Collaborate with the engagement team members to identify and resolve engagement issues, as well as recommend improvements to management", "Perform all stages of simple engagements, from planning to report preparation, under the direction of an experienced team member", "Develop an understanding of internal workflow and procedures, organizes and coordinates schedules within the Audit Department", "Work with clients to understand their business and applies Generally Accepted Auditing Principles (GAAP), GAAS, and GAGAS", ]},
    { id: 4,  list: [ "Assist in the planning and execution of financial audits for clients", "Perform walkthrough and identify and assess risks and controls", "Conduct tests of controls and substantive testing procedures", "Analyze and interpret financial data to identify any anomalies or discrepancies", "Prepare and organize audit work papers and documentation", "Collaborate with team members to ensure timely completion of audit assignments", "Document audit findings and prepare audit reports.", "Work with clients to understand their business and applies Generally Accepted Auditing Principles (GAAP), GAAS, and GAGAS", "Develop an understanding of internal workflow and procedures, organizes and coordinates schedules within the Audit Department", ]},
    { id: 5,  list: [ "Manage all stages of the accounting work, including bookkeeping, accounts payable, accounts receivable, and reporting" ,"Oversee the preparation of complex financial statements, reports, and analyses for senior management and external stakeholders" ,"Ensure accurate and timely financial reporting to internal and external stakeholders" ,"Ensure all financial practices are in compliance with relevant laws and regulations" ,"Develop and implement accounting policies, procedures, and controls" ,"Establish and maintain strong relationships with key external stakeholders, such as auditors and financial institutions" ,"Provide leadership and guidance to the accounting team" ,"Perform other related duties and participates in special projects as assigned"]},
    { id: 6,  list: [ "Oversee the day-to-day stages of the accounting work, including bookkeeping, accounts payable, accounts receivable, and reporting." ,"Ensure completeness of weekly, monthly, and annual financial reports" ,"Prepare complex financial statements, reports, and analyses for internal and external stakeholders" ,"Ensure proper retention, filing, and handling of accounting records" ,"Monitor, track, and take necessary action to ensure that all financial and/or accounting transactions are recorded in the applicable systems timely to ensure the continuing accuracy of financial reports" ,"Work with the Accounting team to review, maintain, and communicate accounting procedures" ,"Provide training and guidance to team members" ,"Perform other related duties and responsibilities as required"]},
    { id: 7,  list: [ "Oversee and ensure the accuracy of general ledger entries, account reconciliations, and journal vouchers" ,"Perform certain stages of the accounting work including bookkeeping, accounts payable, accounts receivable, and reporting" ,"Prepare complex financial statements, reports, and analyses for internal and external stakeholders" ,"Assist in the day-to-day activities of the Accounting Department" ,"Ensure all financial practices are in compliance with relevant laws and regulations, such as GAAP and tax code" ,"Maintain awareness and understanding of developments in the accounting field and client industries. " ,"Supervise, train, and develop accounting associates, providing guidance and feedback." ,"Lead special financial projects as assigned"]},
    { id: 8,  list: [ "Perform accounting and bookkeeping functions for the company/clients following the Generally Accepted Accounting Principles (GAAP)" ,"Perform certain stages of the accounting work including bookkeeping, accounts payable, accounts receivable, and reporting" ,"Assist in the day-to-day activities of the Accounting Department" ,"Ensure timely delivery of financial/management reports" ,"Keep organized and up-to-date records of financial transactions" ,"Become familiar with the company/client’s policies and procedures and apply as appropriate" ,"Maintain awareness and understanding of developments in the accounting field and client industries. " ,"Collaborate and communicate effectively with clients and team members" ,"Performs such other accounting-related functions that may be assigned from time to time "]},
    { id: 9,  list: [ "Oversee the audit planning process and risk assessment discussions with the Primary Audit Team" ,"Determine audit objectives, scope with input from supervisors" ,"Manage client relationships, coordination for kick-off meetings, fieldwork, reporting","Review execution of test procedures for IT Entity-Level Controls, IT General Controls, Application Controls, Network Security","Oversee performance of walkthroughs, virtual interviews to assess design of IT controls","Ensure clear, concise documentation of audit procedures in audit software","Oversee conduct of risk analysis, preparation of process maps, flowcharts, development of substantive IT test plans","Review and edit Management reports to describe test results, control gaps","Evaluate control gaps, risks, potential impact, provide recommendations to improve control environment","•Collaborate with clients to obtain management responses to control gaps, assess sufficiency","Participate in regulatory audits, provide audit and controls training","Lead the development and continuous improvement of internal IT processes","Manage and develop supervisors and staff members","Represent the firm in client meetings and communications","Participate in firm-wide initiatives and projects, and contribute to firm-wide policies and procedures","Develop and manage budgets for audit engagements"]},
    { id: 10, list: [ "Lead the audit planning process and risk assessment discussions with the Primary Audit Team" ,"Establish audit objectives and scope, with input from managers" ,"Coordinate with clients for kick-off meetings, fieldwork, and reporting","Review test procedures for IT Entity-Level Controls, IT General Controls, Application Controls, and Network Security","Supervise walkthroughs and virtual interviews to assess the design of IT controls","Document audit procedures in audit software","Conduct risk analysis, prepare process maps and flowcharts, and develop substantive IT test plans","Review and edit Management reports to describe test results and control gaps","Evaluate control gaps, risks, and potential impact, and provide recommendations for improvement","Collaborate with clients to obtain management responses to control gaps and assess their sufficiency and appropriateness","Participate in regulatory audits and provide training on audits and controls","Support the development and continuous improvement of internal IT processes","Supervise and develop junior staff members","Represent the firm in client meetings and communications" ]},
    { id: 11, list: [ "Assist in audit planning and risk assessment discussions" ,"Coordinate directly with clients for kick-off meetings, fieldwork, and reporting" ,"Execute test procedures for IT Entity-Level Controls, IT General Controls, Application Controls, and Network Security","Assess the design of IT controls through walkthroughs and virtual interviews","Document audit procedures in audit software","Prepare process maps, flowcharts, and IT test plans","Draft and review Management reports for test results and control gaps","Provide recommendations to improve control environment","Collaborate with clients on management responses to control gaps","Support regulatory audits and provide audit training","Improve internal IT processes"]},
    { id: 12, list: [ "Assist in planning and performing IT audits and reviews" ,"Execute testing of IT controls and procedures","Identify and document control deficiencies and risks","Assist in drafting audit reports and findings","Stay current with IT auditing standards and regulations"]},
    { id: 13, list: [ "Lead a team of tax supervisors and professionals in the preparation and review of complex tax returns, ensuring compliance with tax laws and regulations" ,"Oversee the workflow and delegation of tasks to team members, ensuring efficient use of resources" ,"Review and edit complex tax returns and related documents for accuracy and quality","Provide technical guidance and oversight to team members","Participate in the performance evaluation, development, and hiring of team members","Stay current with tax law changes and updates, and implement relevant changes in team procedures","Represent the firm in client meetings and communications","Participate in firm-wide initiatives and projects, and contribute to firm-wide policies and procedures","Develop and manage budgets for tax engagements","Bill clients and collect payments for tax services."]},
    { id: 14, list: [ "Oversee a team of tax professionals in the preparation and review of complex tax returns, ensuring compliance with tax laws and regulations" ,"Manage the workflow and delegation of tasks to team members, ensuring efficient use of resources" ,"Review and edit work completed by senior associates for accuracy and quality","Provide technical guidance and training to team members","Participate in the performance evaluation and development of team members","Stay current with tax law changes and updates, and implement relevant changes in team procedures","Represent the firm in client meetings and communications, as needed","Review complex tax returns and related documents","Participate in firm-wide initiatives and projects, as needed"]},
    { id: 15, list: [ "Lead in the preparation and review of complex individual, corporate, and not-for-profit tax returns, ensuring compliance with tax laws and regulations" ,"Supervise the receipt, review, and organization of tax forms from clients" ,"Oversee the verification of tax form completeness and accuracy, and direct the request of missing or corrected information as needed","Review data input from tax forms into tax preparation software or databases for accuracy","Supervise the verification and cross-checking of information to ensure consistency and correctness","Ensure the preparation and maintenance of organized tax work papers and documentation to support complex tax return positions","Lead reviews of tax documents and financial statements for accuracy","Stay current with tax law changes and updates, and communicate relevant information to team members","Provide guidance and training to junior staff members","Review work completed by junior staff members"]},
    { id: 16, list: [ "Assist in the preparation and review of individual, corporate, and not-for-profit tax returns, ensuring compliance with tax laws and regulations. " ,"Receive, review, and organize tax forms from clients. " ,"Ensure completeness and accuracy of tax forms, requesting missing or corrected information as needed. ","Accurately input data from tax forms into tax preparation software or databases. ","Verify and cross-check information to ensure consistency and correctness. ","Prepare and maintain organized tax work papers and documentation to support tax return positions. ","Review tax documents and financial statements for accuracy. ","Stay current with tax law changes and updates"]},
    { id: 17, list: [ "Oversee all aspects of HR services delivery" ,"Develop and implement HR strategies and initiatives" ,"Manage and develop HR staff" ,"Oversee benefits administration and compliance" ,"Lead in employee relations and conflict resolution" ,"Analyze and improve HR metrics and processes" ,"Stay current with HR trends and regulations" ,"Assist in organizational planning and development"]},
    { id: 18, list: [ "" ,"" ,"","","",""]},
    { id: 19, list: [ "" ,"" ,"","","",""]},
    { id: 20, list: [ "" ,"" ,"","","",""]},
    { id: 21, list: [ "" ,"" ,"","","",""]},
    { id: 22, list: [ "" ,"" ,"","","",""]},
    { id: 23, list: [ "Configure and deploy laptops and desktops for end-users" ,"Manage user access rights and permissions" ,"Troubleshoot and resolve technical issues","Assist in maintaining network and system security","Support implementation of new IT systems and software","Provide excellent customer service to end-users", "Stay current with IT trends and best practices"]},
    { id: 24, list: [ "" ,"" ,"","","",""]},
    { id: 25, list: [ "" ,"" ,"","","",""]},
    { id: 26, list: [ "" ,"" ,"","","",""]},
    { id: 27, list: [ "" ,"" ,"","","",""]},
    { id: 28, list: [ "" ,"" ,"","","",""]},
    { id: 29, list: [ "" ,"" ,"","","",""]},
    
    
]



const cards = [
    { id: 1,  urgent: "", department:"Audit",                  positionLevel: "Manager",              position: "Manager - Audit",                          company: "Vasquez BPO, Inc", address: "Audit",                  works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 2,  urgent: "", department:"Audit",                  positionLevel: "Associate Manager",    position: "Associate Manager - Audit",                company: "Vasquez BPO, Inc", address: "Audit",                  works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 3,  urgent: "", department:"Audit",                  positionLevel: "Senior Associate",     position: "Senior Associate - Audit",                 company: "Vasquez BPO, Inc", address: "Audit",                  works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 4,  urgent: "", department:"Audit",                  positionLevel: "Associate",            position: "Associate - Audit",                        company: "Vasquez BPO, Inc", address: "Audit",                  works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 5,  urgent: "", department:"Accounting",             positionLevel: "Manager",              position: "Manager - Accounting",                     company: "Vasquez BPO, Inc", address: "Accounting",             works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 6,  urgent: "", department:"Accounting",             positionLevel: "Associate Manager",    position: "Associate Manager - Accounting",           company: "Vasquez BPO, Inc", address: "IT Audit",               works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 7,  urgent: "", department:"Accounting",             positionLevel: "Senior Associate",     position: "Senior Associate - Accounting",            company: "Vasquez BPO, Inc", address: "IT Audit",               works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 8,  urgent: "", department:"Accounting",             positionLevel: "Associate",            position: "Associate- Accounting",                    company: "Vasquez BPO, Inc", address: "IT Audit",               works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 9,  urgent: "", department:"IT Audit",               positionLevel: "Manager",              position: "Manager - IT Audit",                       company: "Vasquez BPO, Inc", address: "IT Audit",               works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 10, urgent: "", department:"IT Audit",               positionLevel: "Associate Manager",    position: "Associate Manager - IT Audit",             company: "Vasquez BPO, Inc", address: "IT Audit",               works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 11, urgent: "", department:"IT Audit",               positionLevel: "Senior Associate",     position: "Senior Associate - IT Audit",              company: "Vasquez BPO, Inc", address: "IT Audit",               works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 12, urgent: "", department:"IT Audit",               positionLevel: "Associate",            position: "Associate- IT Audit",                      company: "Vasquez BPO, Inc", address: "IT Audit",               works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 13, urgent: "", department:"Tax",                    positionLevel: "Manager",              position: "Manager - Tax",                            company: "Vasquez BPO, Inc", address: "Tax",                    works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 14, urgent: "", department:"Tax",                    positionLevel: "Associate Manager",    position: "Associate Manager - Tax",                  company: "Vasquez BPO, Inc", address: "Tax",                    works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 15, urgent: "", department:"Tax",                    positionLevel: "Senior Associate",     position: "Senior Associate - Tax",                   company: "Vasquez BPO, Inc", address: "Tax",                    works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 16, urgent: "", department:"Tax",                    positionLevel: "Associate",            position: "Associate - Tax",                          company: "Vasquez BPO, Inc", address: "Tax",                    works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 17, urgent: "", department:"Business Operations",    positionLevel: "Manager",              position: "Human Resource Manager",                   company: "Vasquez BPO, Inc", address: "Human Resource",         works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 18, urgent: "", department:"Business Operations",    positionLevel: "Associate Manager",    position: "Human Resource Supervisor",                company: "Vasquez BPO, Inc", address: "Human Resource",         works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 19, urgent: "", department:"Business Operations",    positionLevel: "Senior Associate",     position: "Senior Recruiter",                         company: "Vasquez BPO, Inc", address: "Human Resource",         works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 20, urgent: "", department:"Business Operations",    positionLevel: "Associate",            position: "Recruitment Specialist",                   company: "Vasquez BPO, Inc", address: "Human Resource",         works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 21, urgent: "", department:"Business Operations",    positionLevel: "Associate",            position: "Human Resource Specialist",                company: "Vasquez BPO, Inc", address: "Human Resource",         works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 22, urgent: "", department:"Business Operations",    positionLevel: "Associate",            position: "Compensation & Benefits Specialist",       company: "Vasquez BPO, Inc", address: "Human Resource",         works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 23, urgent: "", department:"Business Operations",    positionLevel: "Manager",              position: "Accounting Manager",                       company: "Vasquez BPO, Inc", address: "Accounting & Finance",   works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 24, urgent: "", department:"Business Operations",    positionLevel: "Associate Manager",    position: "Accounting Supervisor",                    company: "Vasquez BPO, Inc", address: "Accounting & Finance",   works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 25, urgent: "", department:"Business Operations",    positionLevel: "Senior Associate",     position: "Senior Accountant",                        company: "Vasquez BPO, Inc", address: "Accounting & Finance",   works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 26, urgent: "", department:"Business Operations",    positionLevel: "Associate Manager",    position: "IT Administrator",                         company: "Vasquez BPO, Inc", address: "Information Technology", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 27, urgent: "", department:"Business Operations",    positionLevel: "Associate Manager",    position: "IT Support & Implementation Specialist",   company: "Vasquez BPO, Inc", address: "Information Technology", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 28, urgent: "", department:"Business Operations",    positionLevel: "Associate",            position: "Marketing Assistant",                      company: "Vasquez BPO, Inc", address: "Marketing",              works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
     { id: 29, urgent: "", department:"Business Operations",    positionLevel: "Associate",           position: "Administrative Assistant",                 company: "Vasquez BPO, Inc", address: "Office Administration",  works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    ];

// On Click Search Button

function onClickSearch(add){
    var search = document.getElementById("search").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    // console.log(search,position,department)
    debugger
    reloadCards(position,department,search)
}
document.querySelector('button').addEventListener('click', function(event) {
    var search = document.getElementById("search").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    // console.log(search,position,department)
    debugger
    reloadCards(position,department,search)
});

// On Load
const data = localStorage.getItem('data');
reloadCards("All", (data == "" ? "All" : data),"");
displayMessage();

//Load Cards Function
function reloadCards(positionLevel,department,search){
    var newCards = cards.filter( x => 
        x.positionLevel == (positionLevel == "All" ? x.positionLevel : positionLevel) && 
        x.department == (department == "All" ? x.department : department) &&
        x.position.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    clickCard(newCards[0]?.id)
    newCards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.addEventListener("click", function(event) {
            var rightCard = document.querySelector("#careers-job-data .right .card");
            var applynow = document.querySelector("#careers-job-data .right .applynow");
            
            if (!event.target.classList.contains("applyNowEvent")) {
                // rightCard.classList.remove("hidden");
                // applynow.classList.add("hidden");
                applynow.classList.remove("hidden");
            }
            clickCard(card.id);
        });
    
        const urgentPara = document.createElement("p");
        urgentPara.classList.add("urgent");
        urgentPara.textContent = card.urgent;
        cardDiv.appendChild(urgentPara);
    
        const positionPara = document.createElement("p");
        positionPara.classList.add("position");
        positionPara.textContent = card.position;
        cardDiv.appendChild(positionPara);
    
        const companyPara = document.createElement("p");
        companyPara.classList.add("company");
        companyPara.textContent = card.company;
        cardDiv.appendChild(companyPara);
    
        const addressPara = document.createElement("p");
        addressPara.classList.add("address");
        addressPara.textContent = card.address;
        cardDiv.appendChild(addressPara);
    
        // const worksDiv = document.createElement("div");
        // worksDiv.classList.add("work");
        // card.works.forEach(work => {
        //     const worksDiv0 = document.createElement("div");
        //     const workPara = document.createElement("p");
        //     workPara.classList.add("full");
        //     workPara.textContent = work;
        //     worksDiv.appendChild(worksDiv0);
        //     worksDiv0.appendChild(workPara);
        // });
        // cardDiv.appendChild(worksDiv);
    
        // const easyApplyPara = document.createElement("p");
        // easyApplyPara.classList.add("easyapply");
        // easyApplyPara.textContent = card.easyapply;
        // cardDiv.appendChild(easyApplyPara);
    
        // const contextPara = document.createElement("p");
        // contextPara.classList.add("context");
        // contextPara.textContent = card.context;
        // cardDiv.appendChild(contextPara);
    
        const applyButton = document.createElement("button");
        applyButton.classList.add("applyNowEvent")
        applyButton.textContent = "Apply Now";
        cardDiv.appendChild(applyButton);
        applyButton.addEventListener("click", function() {

            var rightCard = document.querySelector("#careers-job-data .right .card");
            var applynow = document.querySelector("#careers-job-data .right .applynow");

            // comment temporary
            // rightCard.classList.add("hidden");
            // applynow.classList.remove("hidden");

            // new added temporary
            // rightCard.classList.remove("hidden");
            // applynow.classList.add("hidden");

            applynow.classList.remove("hidden");
        });
    
        cardContainer.appendChild(cardDiv);
    });
}


//click apply now event on right card
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("applyRightCard")) {
        var rightCard = document.querySelector("#careers-job-data .right .card");
        var applynow = document.querySelector("#careers-job-data .right .applynow");
        // rightCard.classList.add("hidden");
        // applynow.classList.remove("hidden");
    }
});


// Click Cards Function
function clickCard(id) {
    var card = cards.find(x=>x.id == id)
    document.querySelector(".right .applynow .position").textContent = card.position
    document.querySelector(".right .card .position").textContent = card.position
    document.querySelector(".right .card .company-address .company").textContent = card.company
    document.querySelector(".right .card .company-address .address").textContent = card.address
    document.querySelector(".right .card .job-details .type").textContent = card.works[0]
    document.querySelector(".right .card .job-details .location").textContent = card.address
    document.querySelector(".right .card .job-details .postion").textContent = card.postion
    document.querySelector(".right .card .job-details .description").textContent = card.context


    //Setup Qualifications and Responsibilities
    const cardQualifi = document.querySelector(".right .applynow .Qualif-card");
    const cardRespons = document.querySelector(".right .applynow .Respo-card");
    cardQualifi.innerHTML = "";
    cardRespons.innerHTML = "";
    
    const ulq = document.createElement("ul");
    const ulr = document.createElement("ul");
    var qual = qualifications.find(q=>q.id == id)?.list
    var resp = resposibilities.find(q=>q.id == id)?.list

    //Qualifications
    if (qual) {
        qual.forEach(item => {
            const li = document.createElement("li");
            const p0 = document.createElement("p");
            const p1 = document.createElement("p");
            p0.textContent = "•"
            p1.textContent = item
            li.appendChild(p0)
            li.appendChild(p1)
            ulq.appendChild(li)
        });
        cardQualifi.appendChild(ulq)
    }

    //Responsibilities
    if (resp) {
        resp.forEach(item => {
            const li = document.createElement("li");
            const p0 = document.createElement("p");
            const p1 = document.createElement("p");
            p0.textContent = "•"
            p1.textContent = item
            li.appendChild(p0)
            li.appendChild(p1)
            ulr.appendChild(li)
        });
        cardRespons.appendChild(ulr)
    }

    //hide form again
    onClickApplyNow(true);
}

function displayMessage() {
    var position = document.getElementById('position').value;
    var department = document.getElementById('department').value;

    if (position === 'All') {
        document.getElementById('position').options[0].text = 'POSITION LEVEL';
    } else {
        document.getElementById('position').options[0].text = 'All';
    }

    if (department === 'All') {
        document.getElementById('department').options[0].text = 'DEPARTMENT';
    } else {
        document.getElementById('department').options[0].text = 'All';
    }

    var search = document.getElementById("search").value;

    debugger
    reloadCards(position,department,search)
}

// apply button on right card
function onClickApplyNow(add){
    const btnApplyNow = document.querySelector(".right .applynow .applynow");
    const QnR = document.querySelector(".right .applynow .QnR");
    if (add) {
        btnApplyNow.classList.add("hidden");
        QnR.classList.remove("hidden");
    }else {
        btnApplyNow.classList.remove("hidden");
        QnR.classList.add("hidden");
    }
}