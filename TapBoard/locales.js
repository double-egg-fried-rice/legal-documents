const translations = {
    ko: {
        appNameDefault: "TapBoard",
        title: "개인정보 처리방침",
        intro_company: "<strong>파인솔브 (FINE SOLVE)</strong>(이하 \"회사\")는 사용자의 개인정보를 중요시하며, 「개인정보 보호법」 및 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다.",
        intro_app: "본 앱 <strong>{appName}</strong>는 별도의 서버를 통해 사용자의 개인정보를 수집하거나 저장하지 않습니다. 회사는 본 방침을 통해 사용자가 앱을 안심하고 사용할 수 있도록 개인정보 처리 현황을 투명하게 공개합니다.",

        section1_title: "1. 수집하는 개인정보의 항목 및 수집 방법",
        section1_desc: "<strong>{appName}</strong>는 회원가입 절차가 없으며, 사용자의 식별 가능한 개인정보(이름, 전화번호, 이메일 등)를 별도의 서버로 전송하거나 수집하지 않습니다.",
        section1_list1: "<strong>앱 내 데이터</strong>: 사용자가 앱에 저장하는 텍스트 데이터(상용구, 메모 등)와 그룹 정보는 사용자의 기기 내(로컬 저장소)에만 저장되며, 회사로 전송되지 않습니다.",
        section1_list2: "<strong>키보드 확장 기능</strong>: {appName} 키보드를 사용하여 입력하는 정보는 앱의 기능(저장된 텍스트 붙여넣기)을 수행하기 위해서만 사용됩니다. 사용자가 키보드를 통해 입력하는 비밀번호, 신용카드 번호, 주소 등 어떠한 민감 정보도 수집하거나 외부로 전송하지 않습니다.",

        section2_title: "2. 개인정보의 처리 목적",
        section2_desc: "앱은 오직 사용자의 기기 내에서 서비스를 제공하기 위한 목적으로만 데이터를 처리합니다.",
        section2_list1: "사용자가 저장한 텍스트 관리 및 키보드 입력을 통한 붙여넣기 기능 제공",
        section2_list2: "구독 및 프리미엄 기능 활성화 여부 확인",

        section3_title: "3. 개인정보의 제3자 제공",
        section3_desc: "회사는 사용자의 개인정보를 수집하지 않으므로, 이를 제3자에게 제공하거나 위탁하지 않습니다.",

        section4_title: "4. 인앱 결제(구독) 관련 정보",
        section4_desc1: "본 앱은 Apple의 In-App Purchase(인앱 결제) 기능을 통해 구독 및 상품 결제 서비스를 제공합니다.",
        section4_desc2: "결제 과정에서 발생하는 모든 정보(카드 번호, 결제 계정 정보 등)는 Apple이 처리하고 관리하며, 회사는 해당 결제 세부 정보에 접근하거나 저장하지 않습니다. 회사는 오직 Apple로부터 전달받은 '구매 완료 여부' 및 '구독 유효 기간' 데이터만을 확인하여 서비스를 제공합니다.",

        section5_title: "5. 개인정보의 파기 절차 및 방법",
        section5_desc: "본 앱은 서버에 개인정보를 저장하지 않으므로 별도의 파기 절차가 필요하지 않습니다. 사용자가 앱을 삭제할 경우, 기기에 저장된 모든 데이터(저장된 텍스트, 그룹 설정 등)는 즉시 삭제되어 복구할 수 없습니다.",

        section6_title: "6. 이용자 및 법정대리인의 권리와 그 행사방법",
        section6_desc: "사용자는 언제든지 앱을 삭제함으로써 개인정보(로컬 데이터) 처리를 중단하고 데이터를 파기할 수 있습니다.",

        section7_title: "7. 개인정보 보호책임자",
        section7_desc: "회사는 개인정보 보호와 관련한 문의를 처리하기 위해 아래와 같이 책임자를 지정하고 있습니다.",
        section7_list1: "<strong>상호명</strong>: 파인솔브 (FINE SOLVE)",
        section7_list2: "<strong>대표자</strong>: 방승준",
        section7_list3: "<strong>사업자등록번호</strong>: 171-10-03220",
        section7_list4: "<strong>문의 이메일</strong>: ipun0013@gmail.com",

        section8_title: "8. 개인정보 처리방침의 변경",
        section8_desc: "본 개인정보 처리방침은 법령 및 방침에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 앱 업데이트 공지사항 등을 통해 고지할 것입니다.",
        section8_list1: "<strong>공고 일자</strong>: 2025년 11월 21일",
        section8_list2: "<strong>시행 일자</strong>: 2025년 11월 21일",

        // Support Page
        support_title: "고객 지원",
        support_intro: "{appName}를 이용해 주셔서 감사합니다. 앱 사용 중 발생한 문제나 궁금한 점에 대해 안내해 드립니다.",

        faq_title: "자주 묻는 질문 (FAQ)",

        faq_q1: "Q. 앱을 삭제하면 데이터가 사라지나요?",
        faq_a1: "네, {appName}는 사용자의 개인정보 보호를 위해 별도의 서버에 데이터를 저장하지 않고 사용자의 기기(로컬 저장소)에만 데이터를 저장합니다. 따라서 앱을 삭제하실 경우 저장된 모든 텍스트와 설정 데이터가 함께 삭제되며 복구가 불가능합니다.",

        faq_q2: "Q. {appName} 키보드는 어떻게 추가하나요?",
        faq_a2: "{appName}를 키보드에서 사용하기 위해서는 기기 설정에서 키보드를 추가해야 합니다. 아래 순서대로 진행해 주세요.",
        faq_a2_step1: "iPhone의 <strong>[설정]</strong> 앱을 실행합니다.",
        faq_a2_step2: "<strong>[일반]</strong> &gt; <strong>[키보드]</strong> &gt; <strong>[키보드]</strong> 메뉴로 이동합니다.",
        faq_a2_step3: "<strong>[새로운 키보드 추가...]</strong>를 선택합니다.",
        faq_a2_step4: "'타사 키보드' 목록에서 <strong>{appName}Keyboard - {appName}</strong>를 선택하여 추가합니다.",

        faq_q3: "Q. 구독을 취소하고 싶어요.",
        faq_a3: "구독 관리는 Apple의 정책에 따라 사용자의 Apple ID 설정에서 직접 하셔야 합니다. [설정] > [Apple ID] > [구독] 메뉴에서 {appName} 구독을 관리하거나 취소하실 수 있습니다.",

        contact_title: "문의하기",
        contact_desc: "위의 내용으로 해결되지 않는 문제가 있거나, 앱에 대한 제안 사항이 있으시면 아래 이메일로 문의해 주세요.",
        contact_email_label: "<strong>이메일 문의:</strong>",
        contact_info_desc: "문의 시 아래 내용을 함께 보내주시면 더 빠르고 정확한 답변이 가능합니다.",
        contact_info_list1: "사용 중인 기기 모델명 (예: iPhone 14 Pro)",
        contact_info_list2: "iOS 버전 (예: iOS 17.0)",
        contact_info_list3: "{appName} 앱 버전",
        contact_info_list4: "문의 내용 상세 (오류 화면 캡처 등)",

        footer_copy: "&copy; 2025 FINE SOLVE. All rights reserved.",

        // Terms of Service
        tos_title: "이용약관",
        tos_section1_title: "제 1 조 (목적)",
        tos_section1_content: "본 약관은 <strong>파인솔브 (FINE SOLVE)</strong>(이하 \"회사\")가 제공하는 모바일 어플리케이션 <strong>{appName}</strong> 서비스(이하 \"서비스\")의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",

        tos_section2_title: "제 2 조 (용어의 정의)",
        tos_section2_list1: "\"이용자\"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원을 말합니다.",
        tos_section2_list2: "\"유료 서비스\"란 회사가 유료로 제공하는 각종 기능 및 디지털 콘텐츠(월간 구독, 평생 이용권 등)를 말합니다.",
        tos_section2_list3: "\"앱 내 결제(In-App Purchase)\"란 애플리케이션 내에서 유료 서비스를 구매하기 위해 이루어지는 결제 행위를 말합니다.",

        tos_section3_title: "제 3 조 (서비스의 제공 및 변경)",
        tos_section3_list1: "본 서비스는 사용자가 저장한 텍스트를 관리하고, 커스텀 키보드를 통해 입력할 수 있는 기능을 제공합니다.",
        tos_section3_list2: "<strong>데이터 저장</strong>: 본 서비스는 별도의 서버를 운영하지 않으며, 이용자가 생성한 모든 데이터(텍스트, 그룹 설정 등)는 이용자의 단말기에만 저장됩니다.",
        tos_section3_list3: "회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있으며, 중요 변경 사항은 앱 내 공지사항을 통해 알립니다.",

        tos_section4_title: "제 4 조 (구독 및 결제)",
        tos_section4_list1: "본 서비스의 일부 기능은 유료로 제공될 수 있습니다. 이용자는 애플(Apple Inc.)의 앱스토어 결제 시스템을 통해 유료 서비스를 구매할 수 있습니다.",
        tos_section4_list2: "<strong>구독 갱신</strong>: 구독 상품의 경우, 구독 기간 만료 24시간 전까지 구독을 취소하지 않으면 자동으로 갱신되며 결제가 이루어집니다.",
        tos_section4_list3: "결제 금액 및 결제 방식은 애플 앱스토어의 정책을 따릅니다.",

        tos_section5_title: "제 5 조 (청약철회 및 환불)",
        tos_section5_list1: "앱 내 결제를 통한 구매의 환불 및 결제 취소는 애플 앱스토어의 정책 및 절차에 따릅니다. 회사는 이용자의 결제 내역을 직접 조회하거나 취소할 권한이 없으므로, 환불 요청은 이용자가 직접 애플 고객센터를 통해 진행해야 합니다.",
        tos_section5_list2: "단순 변심에 의한 환불 등은 관련 법령 및 앱스토어 정책에 따라 제한될 수 있습니다.",

        tos_section6_title: "제 6 조 (이용자의 의무)",
        tos_section6_list1: "이용자는 서비스를 불법적인 목적으로 이용해서는 안 되며, 타인의 권리를 침해하거나 미풍양속을 해치는 내용을 저장 및 전송해서는 안 됩니다.",
        tos_section6_list2: "이용자는 자신의 기기 및 데이터에 대한 관리 책임을 집니다. 기기 분실, 앱 삭제, 비밀번호 관리 소홀 등으로 인한 데이터 유실에 대한 책임은 이용자 본인에게 있습니다.",

        tos_section7_title: "제 7 조 (책임의 한계 및 면책)",
        tos_section7_list1: "<strong>데이터 유실 면책</strong>: 본 서비스는 서버에 데이터를 백업하지 않습니다. 이용자가 앱을 삭제하거나 기기를 변경/초기화하여 데이터가 유실된 경우, 회사는 이를 복구할 수 없으며 이에 대해 책임을 지지 않습니다.",
        tos_section7_list2: "회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.",
        tos_section7_list3: "회사는 무료로 제공되는 서비스 이용과 관련하여 관련 법령에 특별한 규정이 없는 한 책임을 지지 않습니다.",

        tos_section8_title: "제 8 조 (준거법 및 재판관할)",
        tos_section8_list1: "회사와 이용자 간에 제기된 소송은 대한민국 법을 준거법으로 합니다.",
        tos_section8_list2: "서비스 이용과 관련하여 분쟁이 발생할 경우, 회사의 본점 소재지를 관할하는 법원을 관할 법원으로 합니다.",

        tos_addendum: "부칙",
        tos_addendum_article1_title: "제 1 조 (시행일)",
        tos_addendum_article1_content: "본 약관은 2025년 11월 21일부터 시행합니다.",
        tos_addendum_article2_title: "제 2 조 (사업자 정보)",
        tos_addendum_list1: "<strong>상호명</strong>: 파인솔브 (FINE SOLVE)",
        tos_addendum_list2: "<strong>대표자</strong>: 방승준",
        tos_addendum_list3: "<strong>사업자등록번호</strong>: 171-10-03220",
        tos_addendum_list4: "<strong>연락처</strong>: ipun0013@gmail.com"


    },
    en: {
        appNameDefault: "TapBoard",
        title: "Privacy Policy",
        intro_company: "<strong>FINE SOLVE</strong> (hereinafter referred to as \"the Company\") values users' personal information and complies with relevant laws such as the Personal Information Protection Act.",
        intro_app: "The app <strong>{appName}</strong> does not collect or store users' personal information through a separate server. The Company transparently discloses the status of personal information processing through this policy so that users can use the app with confidence.",

        section1_title: "1. Items of Personal Information Collected and Method of Collection",
        section1_desc: "<strong>{appName}</strong> does not have a membership registration process, and does not transmit or collect personally identifiable information (name, phone number, email, etc.) to a separate server.",
        section1_list1: "<strong>In-App Data</strong>: Text data (phrases, memos, etc.) and group information saved by the user in the app are stored only on the user's device (local storage) and are not transmitted to the Company.",
        section1_list2: "<strong>Keyboard Extension</strong>: Information entered using the {appName} keyboard is used only to perform the app's function (pasting saved text). We do not collect or transmit any sensitive information such as passwords, credit card numbers, or addresses entered through the keyboard.",

        section2_title: "2. Purpose of Processing Personal Information",
        section2_desc: "The app processes data only for the purpose of providing services within the user's device.",
        section2_list1: "Managing user-saved text and providing paste functionality via keyboard input",
        section2_list2: "Checking subscription and premium feature activation status",

        section3_title: "3. Provision of Personal Information to Third Parties",
        section3_desc: "Since the Company does not collect users' personal information, it does not provide or entrust it to third parties.",

        section4_title: "4. Information Regarding In-App Purchases (Subscriptions)",
        section4_desc1: "This app provides subscription and product payment services through Apple's In-App Purchase function.",
        section4_desc2: "All information generated during the payment process (card number, billing account information, etc.) is processed and managed by Apple, and the Company does not have access to or store such payment details. The Company only uses data regarding 'purchase completion' and 'subscription validity period' received from Apple to provide services.",

        section5_title: "5. Procedure and Method of Destruction of Personal Information",
        section5_desc: "Since this app does not store personal information on a server, no separate destruction procedure is required. If the user deletes the app, all data stored on the device (saved text, group settings, etc.) is immediately deleted and cannot be recovered.",

        section6_title: "6. Rights of Users and Legal Representatives and Method of Exercise",
        section6_desc: "Users can stop the processing of personal information (local data) and destroy data at any time by deleting the app.",

        section7_title: "7. Data Protection Officer",
        section7_desc: "The Company designates the following person in charge to handle inquiries related to personal information protection.",
        section7_list1: "<strong>Company Name</strong>: FINE SOLVE",
        section7_list2: "<strong>Representative</strong>: Seungjun Bang",
        section7_list3: "<strong>Business Registration Number</strong>: 171-10-03220",
        section7_list4: "<strong>Contact Email</strong>: ipun0013@gmail.com",

        section8_title: "8. Changes to the Privacy Policy",
        section8_desc: "If there are additions, deletions, or modifications to this privacy policy according to laws and policies, we will notify you through notices such as app updates.",
        section8_list1: "<strong>Announcement Date</strong>: November 21, 2025",
        section8_list2: "<strong>Effective Date</strong>: November 21, 2025",

        // Support Page
        support_title: "Support",
        support_intro: "Thank you for using {appName}. Here is information regarding any issues or questions you may have while using the app.",

        faq_title: "Frequently Asked Questions (FAQ)",

        faq_q1: "Q. Will my data be lost if I delete the app?",
        faq_a1: "Yes, to protect your privacy, {appName} does not store data on a separate server but only on your device (local storage). Therefore, if you delete the app, all saved texts and settings will be deleted and cannot be recovered.",

        faq_q2: "Q. How do I add the {appName} keyboard?",
        faq_a2: "To use {appName} on your keyboard, you need to add the keyboard in your device settings. Please follow the steps below.",
        faq_a2_step1: "Open the <strong>[Settings]</strong> app on your iPhone.",
        faq_a2_step2: "Go to <strong>[General]</strong> &gt; <strong>[Keyboard]</strong> &gt; <strong>[Keyboards]</strong>.",
        faq_a2_step3: "Select <strong>[Add New Keyboard...]</strong>.",
        faq_a2_step4: "Select <strong>{appName}Keyboard - {appName}</strong> from the 'Third-Party Keyboards' list to add it.",

        faq_q3: "Q. I want to cancel my subscription.",
        faq_a3: "Subscription management must be done directly in your Apple ID settings according to Apple's policy. You can manage or cancel your {appName} subscription in [Settings] > [Apple ID] > [Subscriptions].",

        contact_title: "Contact Us",
        contact_desc: "If you have any issues not resolved by the above, or have any suggestions for the app, please contact us at the email below.",
        contact_email_label: "<strong>Email Inquiry:</strong>",
        contact_info_desc: "Please include the following information when contacting us for a faster and more accurate response.",
        contact_info_list1: "Device Model (e.g., iPhone 14 Pro)",
        contact_info_list2: "iOS Version (e.g., iOS 17.0)",
        contact_info_list3: "{appName} App Version",
        contact_info_list4: "Details of inquiry (Screenshot of error, etc.)",

        footer_copy: "&copy; 2025 FINE SOLVE. All rights reserved.",

        // Terms of Service
        tos_title: "Terms of Service",
        tos_section1_title: "Article 1 (Purpose)",
        tos_section1_content: "These terms aim to define the rights, obligations, and responsibilities of the Company and the user regarding the use of the mobile application <strong>{appName}</strong> service (hereinafter \"the Service\") provided by <strong>FINE SOLVE</strong> (hereinafter \"the Company\").",

        tos_section2_title: "Article 2 (Definition of Terms)",
        tos_section2_list1: "\"User\" refers to a member who uses the Service provided by the Company in accordance with these Terms.",
        tos_section2_list2: "\"Paid Service\" refers to various functions and digital content (monthly subscription, lifetime access, etc.) provided by the Company for a fee.",
        tos_section2_list3: "\"In-App Purchase\" refers to the payment act made within the application to purchase Paid Services.",

        tos_section3_title: "Article 3 (Provision and Change of Service)",
        tos_section3_list1: "This Service provides functions to manage text saved by the user and input it through a custom keyboard.",
        tos_section3_list2: "<strong>Data Storage</strong>: This Service does not operate a separate server, and all data (text, group settings, etc.) created by the user is stored only on the user's device.",
        tos_section3_list3: "The Company may change the Service provided according to operational or technical needs, and important changes will be notified through notices within the app.",

        tos_section4_title: "Article 4 (Subscription and Payment)",
        tos_section4_list1: "Some functions of this Service may be provided for a fee. Users can purchase Paid Services through Apple Inc.'s App Store payment system.",
        tos_section4_list2: "<strong>Subscription Renewal</strong>: For subscription products, if the subscription is not canceled at least 24 hours before the end of the subscription period, it will be automatically renewed and payment will be made.",
        tos_section4_list3: "Payment amounts and methods follow the policies of the Apple App Store.",

        tos_section5_title: "Article 5 (Withdrawal of Subscription and Refund)",
        tos_section5_list1: "Refunds and cancellations for purchases made through In-App Purchase follow the policies and procedures of the Apple App Store. Since the Company does not have the authority to directly view or cancel the user's payment details, refund requests must be made directly by the user through Apple Customer Support.",
        tos_section5_list2: "Refunds due to simple change of mind may be restricted in accordance with relevant laws and App Store policies.",

        tos_section6_title: "Article 6 (Obligations of User)",
        tos_section6_list1: "Users must not use the Service for illegal purposes and must not store or transmit content that infringes on the rights of others or violates public order and morals.",
        tos_section6_list2: "Users are responsible for managing their devices and data. The user bears the responsibility for data loss due to device loss, app deletion, negligence in password management, etc.",

        tos_section7_title: "Article 7 (Limitation of Liability and Indemnification)",
        tos_section7_list1: "<strong>Exemption for Data Loss</strong>: This Service does not back up data to a server. If data is lost because the user deletes the app or changes/resets the device, the Company cannot recover it and is not responsible for it.",
        tos_section7_list2: "The Company is exempted from responsibility for providing the Service if it is unable to provide the Service due to natural disasters or equivalent force majeure.",
        tos_section7_list3: "The Company is not responsible for the use of free services unless there are special provisions in relevant laws.",

        tos_section8_title: "Article 8 (Governing Law and Jurisdiction)",
        tos_section8_list1: "Lawsuits filed between the Company and the User shall be governed by the laws of the Republic of Korea.",
        tos_section8_list2: "In case of a dispute regarding the use of the Service, the court having jurisdiction over the location of the Company's head office shall be the competent court.",

        tos_addendum: "Addendum",
        tos_addendum_article1_title: "Article 1 (Effective Date)",
        tos_addendum_article1_content: "These Terms are effective from November 21, 2025.",
        tos_addendum_article2_title: "Article 2 (Business Information)",
        tos_addendum_list1: "<strong>Company Name</strong>: FINE SOLVE",
        tos_addendum_list2: "<strong>Representative</strong>: Seungjun Bang",
        tos_addendum_list3: "<strong>Business Registration Number</strong>: 171-10-03220",
        tos_addendum_list4: "<strong>Contact</strong>: ipun0013@gmail.com"


    },
    ja: {
        appNameDefault: "TapBoard",
        title: "プライバシーポリシー",
        intro_company: "<strong>FINE SOLVE</strong>（以下「当社」といいます）は、ユーザーの個人情報を重要視し、個人情報保護法などの関連法令を遵守しています。",
        intro_app: "本アプリ <strong>{appName}</strong> は、別途サーバーを通じてユーザーの個人情報を収集または保存することはありません。当社は、ユーザーが安心してアプリを利用できるよう、本方針を通じて個人情報の取り扱い状況を透明に公開します。",

        section1_title: "1. 収集する個人情報の項目および収集方法",
        section1_desc: "<strong>{appName}</strong> には会員登録の手続きがなく、ユーザーの識別可能な個人情報（氏名、電話番号、メールアドレスなど）を別途サーバーへ送信または収集することはありません。",
        section1_list1: "<strong>アプリ内データ</strong>: ユーザーがアプリに保存するテキストデータ（定型文、メモなど）やグループ情報は、ユーザーの端末内（ローカルストレージ）にのみ保存され、当社へは送信されません。",
        section1_list2: "<strong>キーボード拡張機能</strong>: {appName} キーボードを使用して入力される情報は、アプリの機能（保存されたテキストの貼り付け）を実行するためにのみ使用されます。パスワード、クレジットカード番号、住所など、キーボードを通じて入力されるいかなる機微情報も収集したり外部へ送信したりすることはありません。",

        section2_title: "2. 個人情報の利用目的",
        section2_desc: "本アプリは、ユーザーの端末内でサービスを提供することのみを目的としてデータを処理します。",
        section2_list1: "ユーザーが保存したテキストの管理およびキーボード入力による貼り付け機能の提供",
        section2_list2: "サブスクリプションおよびプレミアム機能の有効化状態の確認",

        section3_title: "3. 個人情報の第三者提供",
        section3_desc: "当社はユーザーの個人情報を収集しないため、これを第三者に提供または委託することはありません。",

        section4_title: "4. アプリ内課金（サブスクリプション）に関する情報",
        section4_desc1: "本アプリは、AppleのIn-App Purchase（アプリ内課金）機能を通じてサブスクリプションおよび商品決済サービスを提供します。",
        section4_desc2: "決済プロセスで発生するすべての情報（カード番号、決済アカウント情報など）はAppleが処理および管理し、当社は当該決済の詳細情報にアクセスしたり保存したりしません。当社は、Appleから伝達された「購入完了の可否」および「サブスクリプション有効期間」データのみを確認してサービスを提供します。",

        section5_title: "5. 個人情報の破棄手続きおよび方法",
        section5_desc: "本アプリはサーバーに個人情報を保存しないため、別途の破棄手続きは必要ありません。ユーザーがアプリを削除した場合、端末に保存されたすべてのデータ（保存されたテキスト、グループ設定など）は即時に削除され、復元することはできません。",

        section6_title: "6. 利用者および法定代理人の権利とその行使方法",
        section6_desc: "ユーザーはいつでもアプリを削除することにより、個人情報（ローカルデータ）の処理を中止し、データを破棄することができます。",

        section7_title: "7. 個人情報保護責任者",
        section7_desc: "当社は、個人情報保護に関するお問い合わせを処理するために、以下の通り責任者を指定しています。",
        section7_list1: "<strong>商号</strong>: FINE SOLVE",
        section7_list2: "<strong>代表者</strong>: Bang Seungjun",
        section7_list3: "<strong>事業者登録番号</strong>: 171-10-03220",
        section7_list4: "<strong>お問い合わせメール</strong>: ipun0013@gmail.com",

        section8_title: "8. プライバシーポリシーの変更",
        section8_desc: "本プライバシーポリシーは、法令および方針に従って内容の追加、削除、および修正がある場合、アプリのアップデートのお知らせなどを通じて通知します。",
        section8_list1: "<strong>公告日</strong>: 2025年 11月 21日",
        section8_list2: "<strong>施行日</strong>: 2025年 11月 21日",

        // Support Page
        support_title: "サポート",
        support_intro: "{appName}をご利用いただきありがとうございます。アプリの使用中に発生した問題やご不明な点についてご案内いたします。",

        faq_title: "よくある質問 (FAQ)",

        faq_q1: "Q. アプリを削除するとデータは消えますか？",
        faq_a1: "はい、{appName}はユーザーの個人情報保護のため、別途サーバーにデータを保存せず、ユーザーの端末（ローカルストレージ）にのみデータを保存します。したがって、アプリを削除された場合、保存されたすべてのテキストと設定データも削除され、復元することはできません。",

        faq_q2: "Q. {appName}キーボードはどのように追加しますか？",
        faq_a2: "{appName}をキーボードで使用するためには、端末の設定でキーボードを追加する必要があります。以下の手順で進めてください。",
        faq_a2_step1: "iPhoneの<strong>[設定]</strong>アプリを開きます。",
        faq_a2_step2: "<strong>[一般]</strong> &gt; <strong>[キーボード]</strong> &gt; <strong>[キーボード]</strong>メニューに移動します。",
        faq_a2_step3: "<strong>[新しいキーボードを追加...]</strong>を選択します。",
        faq_a2_step4: "'他社製キーボード'リストから<strong>{appName}Keyboard - {appName}</strong>を選択して追加します。",

        faq_q3: "Q. サブスクリプションをキャンセルしたいです。",
        faq_a3: "サブスクリプションの管理は、Appleのポリシーに従い、ユーザーのApple ID設定で直接行っていただく必要があります。[設定] > [Apple ID] > [サブスクリプション]メニューから{appName}のサブスクリプションを管理またはキャンセルできます。",

        contact_title: "お問い合わせ",
        contact_desc: "上記の内容で解決しない問題がある場合、またはアプリに関するご提案がある場合は、以下のメールでお問い合わせください。",
        contact_email_label: "<strong>メールでのお問い合わせ:</strong>",
        contact_info_desc: "お問い合わせの際、以下の内容を一緒にお送りいただければ、より迅速で正確な回答が可能です。",
        contact_info_list1: "ご利用の端末モデル名（例：iPhone 14 Pro）",
        contact_info_list2: "iOSバージョン（例：iOS 17.0）",
        contact_info_list3: "{appName}アプリバージョン",
        contact_info_list4: "お問い合わせ内容の詳細（エラー画面のキャプチャなど）",

        footer_copy: "&copy; 2025 FINE SOLVE. All rights reserved.",

        // Terms of Service
        tos_title: "利用規約",
        tos_section1_title: "第 1 条 (目的)",
        tos_section1_content: "本規約は、<strong>FINE SOLVE</strong>（以下「当社」）が提供するモバイルアプリケーション <strong>{appName}</strong> サービス（以下「本サービス」）の利用に関し、当社と利用者の権利、義務、および責任事項を規定することを目的とします。",

        tos_section2_title: "第 2 条 (用語の定義)",
        tos_section2_list1: "「利用者」とは、本規約に従い当社が提供するサービスを利用する会員をいいます。",
        tos_section2_list2: "「有料サービス」とは、当社が有料で提供する各種機能およびデジタルコンテンツ（月間サブスクリプション、無期限利用権など）をいいます。",
        tos_section2_list3: "「アプリ内課金(In-App Purchase)」とは、アプリケーション内で有料サービスを購入するために行われる決済行為をいいます。",

        tos_section3_title: "第 3 条 (サービスの提供および変更)",
        tos_section3_list1: "本サービスは、ユーザーが保存したテキストを管理し、カスタムキーボードを通じて入力できる機能を提供します。",
        tos_section3_list2: "<strong>データ保存</strong>: 本サービスは別途サーバーを運営しておらず、利用者が作成したすべてのデータ（テキスト、グループ設定など）は利用者の端末にのみ保存されます。",
        tos_section3_list3: "当社は、運営上、技術上の必要に応じて提供しているサービスを変更することができ、重要な変更事項はアプリ内のお知らせを通じて通知します。",

        tos_section4_title: "第 4 条 (サブスクリプションおよび決済)",
        tos_section4_list1: "本サービスの一部機能は有料で提供される場合があります。利用者はApple（Apple Inc.）のApp Store決済システムを通じて有料サービスを購入することができます。",
        tos_section4_list2: "<strong>サブスクリプションの更新</strong>: サブスクリプション商品の場合、購読期間満了の24時間前までに解約しない場合、自動的に更新され決済が行われます。",
        tos_section4_list3: "決済金額および決済方式はApple App Storeのポリシーに従います。",

        tos_section5_title: "第 5 条 (申込みの撤回および払い戻し)",
        tos_section5_list1: "アプリ内課金を通じた購入の払い戻しおよび決済キャンセルは、Apple App Storeのポリシーおよび手続きに従います。当社は利用者の決済履歴を直接照会したりキャンセルしたりする権限がないため、払い戻しの要請は利用者が直接Appleカスタマーサポートを通じて行う必要があります。",
        tos_section5_list2: "単純な変心による払い戻しなどは、関連法令およびApp Storeポリシーに従って制限される場合があります。",

        tos_section6_title: "第 6 条 (利用者の義務)",
        tos_section6_list1: "利用者はサービスを違法な目的で利用してはならず、他人の権利を侵害したり公序良俗を害する内容を保存および送信してはなりません。",
        tos_section6_list2: "利用者は自身の機器およびデータの管理責任を負います。機器の紛失、アプリの削除、パスワード管理の疎かさなどによるデータ消失に対する責任は利用者本人にあります。",

        tos_section7_title: "第 7 条 (責任の限界および免責)",
        tos_section7_list1: "<strong>データ消失の免責</strong>: 本サービスはサーバーにデータをバックアップしません。利用者がアプリを削除したり、機器を変更/初期化してデータが消失した場合、当社はこれを復元できず、これについて責任を負いません。",
        tos_section7_list2: "当社は、天災またはこれに準ずる不可抗力によりサービスを提供できない場合には、サービス提供に関する責任が免除されます。",
        tos_section7_list3: "当社は、無料で提供されるサービスの利用に関し、関連法令に特別な規定がない限り責任を負いません。",

        tos_section8_title: "第 8 条 (準拠法および裁判管轄)",
        tos_section8_list1: "当社と利用者間に提起された訴訟は、大韓民国法を準拠法とします。",
        tos_section8_list2: "サービスの利用に関し紛争が発生した場合、当社の本店所在地を管轄する裁判所を管轄裁判所とします。",

        tos_addendum: "附則",
        tos_addendum_article1_title: "第 1 条 (施行日)",
        tos_addendum_article1_content: "本規約は2025年11月21日から施行します。",
        tos_addendum_article2_title: "第 2 条 (事業者情報)",
        tos_addendum_list1: "<strong>商号</strong>: FINE SOLVE",
        tos_addendum_list2: "<strong>代表者</strong>: Bang Seungjun",
        tos_addendum_list3: "<strong>事業者登録番号</strong>: 171-10-03220",
        tos_addendum_list4: "<strong>連絡先</strong>: ipun0013@gmail.com"


    }
};
