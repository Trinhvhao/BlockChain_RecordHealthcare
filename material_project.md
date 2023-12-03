# .babelrc
File .babelrc là một tệp cấu hình cho Babel, một công cụ giúp bạn chuyển đổi (transpile) mã nguồn JavaScript từ một phiên bản ECMAScript (ES) cao hơn thành một phiên bản ES thấp hơn để đảm bảo tính tương thích với nhiều trình duyệt và môi trường thực thi khác nhau.

Trong trường hợp .babelrc này, nó đang sử dụng một preset của Babel có tên là @babel/preset-env. Preset này giúp Babel tự động xác định các chức năng JavaScript nào cần được chuyển đổi dựa trên các phiên bản JavaScript được hỗ trợ trong môi trường đích. Nó cung cấp khả năng tương thích với các phiên bản JavaScript hiện đại mà không cần phải thiết lập một loạt các tùy chọn cấu hình thủ công.

File .babelrc giúp định rõ cách Babel nên thực hiện quy trình chuyển đổi trên mã nguồn JavaScript của bạn và có thể chứa các cài đặt tùy chọn khác nếu bạn cần.

Ví dụ về nội dung của một tệp .babelrc:

json
Copy code
{
  "presets": ["@babel/preset-env"],
  "plugins": []
}
Trong trường hợp này, chỉ có preset @babel/preset-env, và không có plugin nào được thiết lập. Tùy thuộc vào yêu cầu cụ thể của dự án, bạn có thể cần thêm plugins khác để xử lý các chức năng cụ thể của JavaScript mà bạn đang sử dụng.

# Chai , Mocha
- Chai là một thư viện kiểm thử (testing) dành cho JavaScript và Node.js, thường được sử dụng chủ yếu để viết các bài kiểm thử (tests) cho ứng dụng sử dụng các framework như Mocha hoặc Jasmine. Chai cung cấp một cú pháp dễ đọc và sử dụng, giúp đơn giản hóa việc tạo và duyệt qua các bài kiểm thử.
- Kiểm Thử Giá Trị: Chai cung cấp một loạt các phương thức giúp kiểm thử giá trị của biến, đảm bảo rằng chúng đáp ứng các yêu cầu mong muốn.
<!-- expect(value).to.equal(42);
expect(array).to.have.lengthOf(3); !-->
## Kiểm Thử Hàm: Chai hỗ trợ kiểm thử kết quả của hàm, giúp bạn đảm bảo rằng hàm của bạn hoạt động đúng như dự kiến.
<!-- expect(fn).to.throw(Error); -->
## Kiểm Thử Mảng và Đối Tượng: Chai giúp kiểm thử cấu trúc của mảng và đối tượng, đảm bảo rằng chúng chứa các phần tử và thuộc tính mong muốn.
<!-- expect(array).to.include(3);
expect(obj).to.have.property('name'); -->
## Kiểm Thử Bất Đồng Bộ: Chai hỗ trợ kiểm thử hành vi bất đồng bộ, giúp bạn xác định liệu một hàm bất đồng bộ có hoàn thành đúng như mong đợi hay không.
<!-- expect(asyncFunction()).to.eventually.equal('resolved'); -->
## Chaining và Modifiers: Cú pháp chuỗi nối giúp tạo ra các biểu thức kiểm thử phức tạp. Modifiers như .not, .deep, .any, và .all tăng tính linh hoạt.
<!-- expect(array).to.be.an('array').that.includes(3).and.not.includes(5); -->
## Kiểm Thử Sự Tương Đồng (Deep Equality): Chai giúp kiểm thử sự tương đồng giữa các đối tượng, kể cả các đối tượng lồng nhau.
<!-- expect(obj1).to.deep.equal(obj2); -->
## Plugin và Kết Hợp Với Các Frameworks: Bạn có thể mở rộng chức năng của Chai thông qua các plugin, cũng như tích hợp nó với các frameworks kiểm thử như Mocha và Jasmine.
<!-- const chaiHttp = require('chai-http');
chai.use(chaiHttp); -->
## Kiểm Thử Tính Đúng Đắn của Mã Nguồn: Sử dụng Chai giúp đảm bảo tính đúng đắn của mã nguồn thông qua việc kiểm thử từng thành phần của mã.
<!-- expect(foo).to.be.a('string').and.not.empty; -->
## Tài Liệu Phong Phú và Cộng Đồng Hỗ Trợ:
Chai có một tài liệu phong phú và cộng đồng lớn, giúp lập trình viên hiểu rõ và giải quyết vấn đề một cách hiệu quả.
Chai giúp tạo ra mã kiểm thử dễ đọc và dễ duy trì, đồng thời cung cấp các công cụ linh hoạt để kiểm thử mọi khía cạnh của mã nguồn JavaScript và Node.js.

## dependences và devDependences
Trong Node.js và npm, có hai loại phụ thuộc chính: dependencies và devDependencies. Sự khác nhau chính giữa chúng là:

## dependencies:
Là những phụ thuộc cần thiết cho ứng dụng hoạt động khi đang ở trong môi trường sản xuất.
Những phụ thuộc này thường bao gồm các thư viện và module cần để chạy ứng dụng khi nó đã được triển khai.
## devDependencies:
Là những phụ thuộc chỉ cần thiết trong quá trình phát triển và kiểm thử.
Thường chứa các công cụ giúp trong quá trình phát triển, kiểm thử, và xây dựng ứng dụng như Babel, ESLint, Jest, và các công cụ kiểm thử khác.
Những phụ thuộc này không cần phải được triển khai khi ứng dụng được đưa vào môi trường sản xuất.
Khi bạn cài đặt một module mới với npm, nó có thể được thêm vào dependencies hoặc devDependencies tùy thuộc vào cờ --save hoặc --save-dev bạn sử dụng.
Nếu bạn muốn cập nhật phiên bản của một module và đảm bảo rằng phiên bản mới đóng vai trò cả trong dependencies và devDependencies, bạn có thể thực hiện các bước sau:
## Cập nhật cả dependencies và devDependencies:
Sử dụng cờ --save và --save-dev khi cài đặt module để đảm bảo nó được thêm vào cả hai phần:
npm install --save package-name
npm install --save-dev package-name
Xóa phiên bản cũ:
Nếu phiên bản cũ vẫn xuất hiện trong dependencies, bạn có thể thử xóa nó thủ công từ tệp package.json và sau đó cài đặt lại:
npm uninstall package-name
npm install --save package-name
Chắc chắn rằng sau khi cập nhật, bạn kiểm tra tệp package.json để đảm bảo rằng phiên bản mới của module được ánh xạ vào cả dependencies và devDependencies.


# Ganache Explained

## Why do we Need Ganache for Ethereum Development?
- Web3 development has never been more in vogue than now. with frantic activity in the Web3 and decentralized application (dApp) fields. 
(Phát triển Web3 chưa bao giờ thịnh hành hơn bây giờ. với hoạt động rầm rộ trong lĩnh vực Web3 và ứng dụng phi tập trung (dApp).)

-However, when developing dApps you might find that Web3 development is unnescessarily convoluted. This is partly due to the fact that Web3 development still has not evolved to the same extent as traditional Web2 development.
( Tuy nhiên, khi phát triển dApps, bạn có thể thấy rằng việc phát triển Web3 phức tạp một cách không cần thiết. Điều này một phần là do việc phát triển Web3 vẫn chưa phát triển đến mức độ phát triển như phát triển Web2 truyền thống)

-This, by extension, is not particularly strange, since as the dApp scene remains somewhat in its infancy. However, Web3 development is still booming, and there are some useful tools and platforms to aid development.
( Nói rộng ra, điều này không có gì đặc biệt lạ, vì bối cảnh dApp vẫn còn ở giai đoạn sơ khai. Tuy nhiên, quá trình phát triển Web3 vẫn đang bùng nổ và có một số công cụ và nền tảng hữu ích hỗ trợ phát triển)

-You will likely already know that Moralis provides the best blockchain middleware for dApp development, with an impressive suite of powerful features. Moralis should always be your go-to choice for building dApps- but you can supercharge your development by learning more about other Moralis- compatible tools, like Ganache.
(Bạn có thể biết rằng Moảlis cung cấp phần mềm trung gian blockchain tốt nhất để phát triển dApp, với bộ tính năng mạnh mẽ đầy ấn tượng. Moralis luôn là lựa chọn hàng đầu của bạn để xây dựng dApps- nhưng bạn có thể thức đẩy quá trình phát triển của mình bằng cách tìm hiểu thêm về các công cụ tương thích với Moralis khác, như Ganache )

- Khi phát triển dApp, sẽ rất có lợi nêys thiết lập chuỗi khối Ethereum cục bộ nơi dApp của bạn có thể được thử nghiệm trong một môi trường an toàn. Đây chính xác là những gì Ganache làm.

# What is Ganache Blockchain
- Ganache is part of the Truffle Suite ecosystem. Specifically, the Truffle Suite consists of Ganache and an additional pair of tools; Truffle and Drizzle
(Ganache là một phần của hệ sinh thái Truffle Suite. Cụ thể, Truffle Suite bao gồm Ganache và một cặp công cụ bổ sung; Truffle và Drizzle)

- Truffle is a development environment, asset pipeline and testing framework using the EMV (Ethereum Virtual Machine); meanwhile, Drizzle is a collection of frontend libraries. 
(Truffle là môi trường phát triển, hệ thống tài sản và khung thử nghiệm sử dụng EMV (Máy ảo Ethereum); trong khi đó, Drizzle là tập hợp các thư viện giao diện người dùng.)

- On the other hand, Ganache is a high-end development tool used to run your own local blockchain for both Ethereum and Corda dApp development. Ganache is helpful in all parts of the development process. The local chain allows you to develop, deploy and test your projects and smart contracts in a deterministic and safe environment. 
(Mặt khác, Ganache là một công cụ phát triển cao cấp được sử dụng để chạy chuỗi khối cục bộ của riêng bạn nhằm phát triển cả Ethereum và Corda dApp. Ganache rất hữu ích trong tất cả các phần của quá trình phát triển. Chuỗi địa phương cho phép bạn phát triển, triển khai và thử nghiệm các dự án cũng như hợp đồng thông minh của mình trong một môi trường xác định và an toàn.)

- There are two different ”versions” of Ganache, one desktop application, and one command-line tool. The desktop application is called Ganache UI, and it supports development for both Ethereum and Corda; meanwhile, the command-line tool is called ganache-CLI, which solely supports Ethereum development. Furthermore, all the different versions of Ganache are available for Mac, Windows, and Linux. 
(Có hai “phiên bản” khác nhau của Ganache, một ứng dụng dành cho máy tính để bàn và một công cụ dòng lệnh. Ứng dụng dành cho máy tính để bàn được gọi là Ganache UI và nó hỗ trợ phát triển cho cả Ethereum và Corda; trong khi đó, công cụ dòng lệnh có tên ganache-CLI, chỉ hỗ trợ phát triển Ethereum. Hơn nữa, tất cả các phiên bản khác nhau của Ganache đều có sẵn cho Mac, Windows và Linux.)

# Why do we Need Ganache for Ethereum Development?
- There are two main reasins for utilizing Ganache; the first one is to save money and the other one is to save time. When developing, we want to do thing as cost-effective and efficient as possible - which will sound familiar to anyone using Moralis. Nevertheless, when uploading smart contracts to the Ethereum chain, we must always pay gas fees. This means that we need to pay a transaction fee for every smart contract that we want to test. This can become the case, it is much more beneficial to test smart contracts on a local chain since we can avoid the fees. This means that we can wait to pay the transaction costs for deploying the contracts until they are flawless.
(Có hai lý do chính để sử dụng Ganache; thứ nhất là tiết kiệm tiền và thứ hai là tiết kiệm thời gian. Khi phát triển, chúng tôi muốn làm mọi việc tiết kiệm chi phí và hiệu quả nhất có thể - điều này nghe có vẻ quen thuộc với bất kỳ ai sử dụng Moralis. Tuy nhiên, khi tải các hợp đồng thông minh lên chuỗi Ethereum, chúng tôi luôn phải trả phí gas. Điều này có nghĩa là chúng tôi cần trả phí giao dịch cho mọi hợp đồng thông minh mà chúng tôi muốn thử nghiệm. Điều này có thể xảy ra, sẽ có lợi hơn nhiều khi thử nghiệm các hợp đồng thông minh trên chuỗi địa phương vì chúng ta có thể tránh được các khoản phí. Điều này có nghĩa là chúng tôi có thể chờ thanh toán chi phí giao dịch để triển khai các hợp đồng cho đến khi chúng hoàn hảo.)

-Furthermore, we can also upload our work instantly with our local blockchain. It takes time to upload to both the main- and testnets of Ethereum, and it can be an issue when trying to develop at a rapid pace. This means that we need to wait for our contracts to deploy on the chain before testing them, which can be avoided with a local blockchain set up with Ganache.
(Hơn nữa, chúng tôi cũng có thể tải tác phẩm của mình lên ngay lập tức bằng blockchain cục bộ của mình. Cần có thời gian để tải lên cả mạng chính và mạng thử nghiệm của Ethereum và nó có thể là một vấn đề khi cố gắng phát triển với tốc độ nhanh. Điều này có nghĩa là chúng tôi cần đợi các hợp đồng của mình triển khai trên chuỗi trước khi thử nghiệm chúng, điều này có thể tránh được bằng cách thiết lập chuỗi khối cục bộ với Ganache.)