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
        section8_list2: "<strong>시행 일자</strong>: 2025년 11월 21일"
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
        section8_list2: "<strong>Effective Date</strong>: November 21, 2025"
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
        section8_list2: "<strong>施行日</strong>: 2025年 11月 21日"
    }
};
