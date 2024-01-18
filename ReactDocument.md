# React Router Dom
-react-router-dom is  a popular library for adding routing functionality to React applications. It's a part of the React Router Library, which provides a set of navigation components and utilities for building single-page applications with dynamic routing. The 'react-router-dom' package specufucally includes components designed for web applications using the DOM.
## BrowserRouter:
- Thành phần BrowserRouter là một loại router sử dụng API lịch sử HTML5 để duy trì đồng bộ giữa giao diện người dùng và URL.
- Nó nên được sử dụng để bao quanh toàn bộ ứng dụng để kích hoạt chức năng định tuyến.

## Route:
- Thành phần Route render một số giao diện người dùng khi đường dẫn của nó khớp với URL hiện tại.
- Bạn có thể sử dụng nó để định nghĩa các thành phần khác nhau cho các đường dẫn khác nhau.

## Link:
- Thành phần Link được sử dụng để tạo liên kết điều hướng.
- Nó ngăn chặn việc tải lại trang đầy đủ bằng cách sử dụng hệ thống điều hướng react-router.

## Switch:
- Thành phần Switch được sử dụng để chỉ hiển thị Route hoặc Redirect đầu tiên khớp với vị trí hiện tại.
- Điều này hữu ích khi bạn muốn chỉ hiển thị một đường dẫn duy nhất.

## Redirect:
- Thành phần Redirect được sử dụng để điều hướng đến một vị trí khác.

## useParams:
- Hook useParams cho phép bạn truy cập các phần động của URL.

--> react-router-dom cung cấp một cách mạnh mẽ và linh hoạt để xử lý định tuyến trong ứng dụng React, giúp tạo ra các giao diện người dùng động và có thể điều hướng được. Nó được rộng rãi sử dụng trong cộng đồng React và tích hợp tốt với các thư viện và frameworks React khác.

# UseState, UseEffect
## useState: là một hook giúp bạn theo dõi trạng thái trong functional components. Nó trả về một cặp giá trị: giá trị hiện tại của trạng thái và một hàm để cập nhật trạng thái đó
## useEffect  là một hook được sử dụng để thực hiện các hiệu ứng phụ (side effects) trong functional components. Điều này có thể bao gồm việc thực hiện các tác vụ như gọi API, đăng ký và hủy đăng ký sự kiện, hoặc thay đổi trạng thái dựa trên các điều kiện khác nhau. useEffect nhận vào hai tham số: một hàm chứa mã hiệu ứng và một mảng dependencies.

# "Props"
- là một từ viết tắt của "properties"(tính chất) trong ngữ cảnh của React
- "Props" là một cách để truyền dữ liệu từ một component cha xuống component con. 
- Props giúp các component tương tác và chia sẻ thông tin với nhau.
- Khi một component được sử dụng trong một component khác, bạn có thể truyền dữ liệu cho component đó thông qua các thuộc tính props

# npm vs npx — What’s the Difference?

## npm(Node Package Manager) 
- là một công cụ quản lí gói mặc định được cài đặt khi bạn cài đặt Node.js.
- Chủ yếu được sử dụng để cài đặt, quản lí và triển khai các gói Node.js(thư viện và công cụ) trong dự án của bạn.
- Dùng để cài đặt các gói một cách toàn cục hoặc cục bộ trong dự án của bạn

## npx(Node Pakage Execute)
- là một công cụ được giới thiệu với npm 5.2.0 và sau đó.
- Chủ yếu được sử dụng để chạy các lệnh từ các gói npm mà không cần phải cài đặt chúng một cách toàn cục.
- Cho phép bạn chạt các lệnh từ các gói một lần, giúp tránh việc cài đặt và quản lí các gói mà không cần thiết.

## So sánh chung
- Khi sử dụng npm, bạn thường cần cài đặt gói một cách toàn cục để sử dụng các lệnh liên quan đến gói đó.
npx giúp bạn chạy lệnh trực tiếp từ các gói mà không cần phải cài đặt chúng toàn cục, giảm việc ô nhiễm không gian toàn cục bằng cách giữ các gói phụ thuộc cục bộ cho từng dự án.

# Component Types
Trong React có 2 kiểu chính của component: Functional Components và Class Components

## Functional Components
- Còn được gọi là Stateless Components hoặc Pure Components
- Đây là hàm Javascript thông thường nhận props và trả về React elements để render
- Không có state hoặc các lifecycle methods. Tính chất của chúng là đơn giản và dễ đọc
- Sử dụng hàm useState để giữ và cập nhật state nếu cần thiết (React Hooks).
- Trong functional component, không có từ khoá 'this' được sử dụng. Functional component là những hàm Javascipt đơn thuần và không có khái niệm về đối tượng('this') bên trong chúng.Thay vào đó, chúng sử dụng hook như 'useState', 'useEffect' để quản lý trạng thái và các mặt khác của component.
## Class Components
- Đây là các class ES6 mở rộng từ 'React.Component'.
- Có state và các lifecycle methods như 'componentDidMount', 'componentDidUpdate', 'componentWillUnmount'.
- Sử dụng khi cần quản lý state phức tạp hoặc khi cần sử dụng các lifecycle methods.
- Trong class component, 'this' được sử dụng để tham chiếu đến đối tượng instance của class. Class component có lifecycle methods và có thể chứa trạng thái và phương thức instance.
