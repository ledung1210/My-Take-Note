/**
 *Có 3 cách copy object trong javascript
# Cách 1: Object.assign method - object.assign trong javascript
Sử dụng method Object.assign() copy object :
const obj = {a:1,b:2,c:3};

const clone = Object.assign({},obj);

console.log(clone); // {a:1,b:2,c:3};
# Cách 2: Spread Operator Es6 - copy object javascript spread
const obj = {a:1,b:2,c:3};

const clone = {...obj};

console.log(clone); // {a:1,b:2,c:3};
# Cách 3: Sử dụng JSON.parse() và JSON.stringify()
const obj = {a:1,b:2,c:{d:3}};

const clone = JSON.parse(JSON.stringify(obj));

console.log(clone); // {a:1,b:2,c:3};

Notes: Trong 3 cách copy object trên thì 2 trong số đó là thuộc shallow copy, đó là Object.assign(), và Spread Operator. 
Còn deep Copy chính là cách thứ 3 - Sử dụng JSON.parse() và JSON.stringify().
https://anonystick.com/blog-developer/phong-van-su-khac-nhau-giua-shallow-copying-va-deep-copying-trong-object-javascript-2019112823755023
Shallow copying và Deep copying 
Shallow copying nhiệm vụ của nó chỉ copy những giá trị nông (theo như trả lời phỏng vấn) 
nghĩa là nó chỉ sao chép các giá trị đối tượng bình thường nhưng các giá trị lồng nhau vẫn sử dụng reference đến một đối tượng ban đầu.
Notes: reference type trong javascript tổng thể có 3 loại: Array, function và object. 
Chúng ta cùng nhau xem một ví dụ shallow copy object js khi sử dụng spread operator
const obj = {a:1,b:2,c:{d:3}};
const shallowClone = {...obj};
obj.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
console.log(obj); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}} 
console.log(shallowClone); // nhưng object mà chúng ta clone ra cũng bị thay đổi theo {a:1,b:2,c:{d:34}}
object.assign() là một method nhưng (multiple jobs) nó có nhiều nhiệm vụ trong đó bao gồm những nhiệm vụ copy an object, clone từ một object khác,
 và nối hai hay nhiều object lại với nhau. Giờ ta đi những ví dụ cụ thể hơn nhằm để hiểu rõ hơn
 https://anonystick.com/blog-developer/objectassign-co-the-lam-nhung-gi-voi-object-javascript-PPqgJNrs.jsx
 */
/**
 * Sao chép đối tượng sử dụng JSON.stringify(): Sau đó, obj được chuyển thành chuỗi JSON sử dụng phương thức JSON.stringify(obj).
 * Phương thức này chuyển đổi một đối tượng hoặc giá trị JavaScript thành chuỗi JSON. Đối với đối tượng obj,
 * phương thức này sẽ xử lý tất cả các thuộc tính và đối tượng con bên trong nó, đưa tất cả vào một chuỗi định dạng JSON.
 */
// const obj = { a: 1, b: 2, c: { d: 3 } };
// const clone = JSON.stringify(obj);
// console.log(clone);

/**
 * cách tạo bản sao sâu (deep copy) của một đối tượng trong JavaScript sử dụng cặp phương thức JSON.stringify() và JSON.parse().
 *  Dưới đây là cách hoạt động chi tiết của từng bước trong đoạn code:
 * Đầu tiên, JSON.stringify(obj) được gọi để chuyển đối tượng obj thành một chuỗi JSON. Phương thức này sẽ lấy đối tượng JavaScript và biến nó thành một định dạng văn bản chuỗi JSON, giúp lưu trữ hoặc truyền dữ liệu dễ dàng.
 * Kết quả là một chuỗi biểu diễn tất cả dữ liệu có thể chuyển đổi trong obj, bao gồm cả các đối tượng lồng nhau.
 * Tiếp theo, chuỗi JSON này được chuyển lại thành một đối tượng JavaScript sử dụng JSON.parse(jsonString).
 *  Phương thức này phân tích chuỗi JSON và tạo ra một đối tượng hoặc giá trị JavaScript tương ứng.
 * Quá trình này cơ bản tạo ra một bản sao mới của dữ liệu ban đầu, không liên kết trực tiếp tới đối tượng gốc.
 * 
 * Tóm lại:
 JSON.stringify(obj) chuyển đối tượng obj thành một chuỗi JSON.
JSON.parse(...) chuyển chuỗi JSON trở lại thành một đối tượng JavaScript mới.
Kết quả là biến clone sẽ chứa một bản sao hoàn toàn độc lập về mặt dữ liệu của đối tượng obj. 
Điều này đặc biệt hữu ích khi bạn muốn có một bản sao của đối tượng mà không muốn thay đổi bản gốc khi chỉnh sửa bản sao. 
Tuy nhiên, phương pháp này chỉ hoạt động hiệu quả với các đối tượng chứa dữ liệu có thể chuyển đổi thành JSON (không bao gồm các phương thức, 
đối tượng dựa trên các lớp đặc biệt như Date, Function, hoặc các đối tượng DOM).
 */
const obj = { a: 1, b: 2, c: { d: 3 } };
const jsonString = JSON.stringify(obj);
// jsonString là '{"a":1,"b":2,"c":{"d":3}}'
const newObj = JSON.parse(jsonString);
// newObj sẽ trở thành một bản sao của obj, với newObj = { a: 1, b: 2, c: { d: 3 } }
//console.log(newObj);
//Bây giờ chúng ta cũng tương tự làm như các trên update d = 34
obj.c.d = 34; //thay đổi đối tượng sâu thì shallow copy thay đổi
obj.a = 11; // thay đổi đối tượng nông thì shallow copy không thay đổi
console.log(obj); // {a:1,b:2,c:{d:34}}
console.log(newObj); // {a:1,b:2,c:{d:3}}
///su noi dung tu tai khoan dung.lexuan@hcom.vn
