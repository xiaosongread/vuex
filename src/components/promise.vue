<template>
  <div class="hello">
111
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  computed: {

  },
  created() {
    // ## 正则表达式对象的方法
// + test,返回一个 Boolean 值，它指出在被查找的字符串中是否存在模式。如果存在则返回 true，否则就返回 false。
// + exec,用正则表达式模式在字符串中运行查找，并返回含该查找结果的一个数组。
// + compile,把正则表达式编译为内部格式，从而执行得更快。

// + g （全文查找）
// + i （忽略大小写）
// + m （多行查找）
// (^)代表字符开始位置
// ($)代表字符结束位置

//### test方法,测试字符串,符合模式时返回true,否则返回false
// var reg = /he/
// var reg1 = /he/i
// var str = 'heaa'
// console.log(reg.test(str)) // true
// var str1 = 'ahae'
// console.log(reg.test(str1)) // false
// var str2 = 'HEHE'
// console.log(reg.test(str2)) // false
// console.log(reg1.test(str2)) // true

// reg = /\s/;// \s匹配任何空白字符，包括空格、制表符、换页符等等
// str= "user Name";//用户名包含空格
// alert(reg.test(str));//true

// reg=/^[a-z]/i;//[]匹配指定范围内的任意字符,这里将匹配英文字母,不区分大小写
// str="variableName";//变量名必须以字母开头
// alert(reg.test(str));//true
// str="123abc";
// alert(reg.test(str));//false

// var osVersion = "Ubuntu 8";//其中的8表示系统主版本号
// var re = /^[a-z]+\s+\d+$/i; //+号表示字符至少要出现1次,\s表示空白字符,\d表示一个数字
// alert(re.test(osVersion));//true,但我们想知道主版本号


// ### exec,返回一个数组,数组的第一个元素为完整的匹配内容
// var osVersion = "Ubuntu 8"
// re=/^[a-z]+\s+\d+$/i;
// arr = re.exec(osVersion);
// console.log(arr[0]) // Ubuntu 8

// re=/\d+/;
// var arr = re.exec(osVersion);
// console.log(arr, arr[0]);//8

// var osVersion = "Ubuntu 822 11"
// var arr = re.exec(osVersion);
// console.log(arr, arr[0]);//822

// var osVersion = "Ubuntu 8"
// re=/^[a-z]+\s+(\d+)$/i;//用()来创建子匹配
// arr = re.exec(osVersion)
// console.log(arr) // ["Ubuntu 8", "8"]
// console.log(arr[0]);//整个osVersion,也就是正则表达式的完整匹配
// console.log(arr[1]);//8,第一个子匹配,事实也可以这样取出主版本号
// console.log(arr.length); // 2
// osVersion = "Ubuntu 8.10";//取出主版本号和次版本号
// re = /^[a-z]+\s+\d+\.\d+$/i//.是正则表达式元字符之一,若要用它的字面意义须转义
// arr = re.exec(osVersion)
// console.log(arr, arr[0], arr[1], arr[2])// [Ubuntu 8.10]
// console.log(arr.length)// 1
// re = /^[a-z]+\s+(\d+)\.(\d+)$/i//.是正则表达式元字符之一,若要用它的字面意义须转义
// arr = re.exec(osVersion)
// console.log(arr, arr[0], arr[1], arr[2])// [Ubuntu 8.10, 8, 10]
// console.log(arr.length)// 3

// > 当字符串不匹配re时,exec方法将返回null
// var osVersion = "Ubuntu 8"
// var reg = /aa/
// var arr = reg.exec(osVersion)
// console.log(arr) // null

// ## String对象的一些和正则表达式有关的方法
// ### replace方法,用于替换字符串
// var str = 'some money'
// var str1 = str.replace('some', 'much')
// console.log(str1) // much money

// replace的第一个参数可以为正则表达式
// var re = /\s/;//空白字符
// alert(str.replace(re,"%"));//some%money

// str ="some some             \tsome\t\f";
// re = /\s+/;
// alert(str.replace(re,"#"));//但这样只会将第一次出现的一堆空白字符替换掉

// 因为一个正则表达式只能进行一次匹配,\s+匹配了第一个空格后就退出了
// re = /\s+/g;//g,全局标志,将使正则表达式匹配整个字符串
// alert(str.replace(re,"@"));//some@some@some@


// ### split
// var str = "a-bd-c";
// var arr = str.split("-");//返回["a","bd","c"]
// 如果str是用户输入的,他可能输入a-bd-c也可能输入a bd c或a_bd_c,但不会是abdc(这样就说他输错了)
// str = "a_db-c";//用户以他喜欢的方式加分隔符s
// re=/[^a-z]/ig;//前面我们说^表示字符开始,但在[]里它表示一个负字符集
// //匹配任何不在指定范围内的任意字符,这里将匹配除字母处的所有字符
// arr = str.split(re);//仍返回["a","bd","c"];
// str1 = str.replace(re, '@') // a@db@c

//### search  在字符串中查找时我们常用indexOf,与之对应用于正则查找的方法是search
// str = "My age is 18.Golden age!";//年龄不是一定的,我们用indexOf不能查找它的位置
// re = /\d+/;
// alert(str.search(re));//返回查找到的字符串开始下标10
// //注意,因为查找本身就是出现第一次就立即返回,所以无需在search时使用g标志
// //下面的代码虽然不出错,但g标志是多余的
// re=/\d+/g;
// alert(str.search(re));//仍然是10

// > 注意,当search方法没有找到匹配时,将返回-1

// ### match 方法也用于将字符串与正则表达式进行匹配并返回结果数组
// var str = "My name is CJ.Hello everyone!";
// re = /[A-Z]/g;
// arr = str.match(re);
// alert(arr);//M,C,J,H

// 从字符串中抽取单词
// re = /\b[a-z]*\b/gi;//\b表示单词边界
// str = "one two three four";
// alert(str.match(re));//one,two,three,four

// 字符    描述
// \n      换行符
// \r      回车符
// \t      制表符
// \f      换页符（Tab）
// \cX     与X对应的控制字符
// \b      退格符(BackSpace)
// \v      垂直制表符
// \0      空字符("")

// 字符类 ---〉简单类，反向类，范围类，组合类，预定义类
//简单类
// var re = /[abc123]/;//将匹配abc123这6个字符中一个
// //负向类
// re = /[^abc]/;//将匹配除abc之外的一个字符
// //范围类
// re = /[a-b]/;//将匹配小写a-b 26个字母
// re = /[^0-9]/;//将匹配除0-9 10个字符之处的一个字符
// //组合类
// re = /[a-b0-9A-Z_]/;//将匹配字母，数字和下划线

// 代码  等同于                  匹配
// .     IE下[^\n]，其它[^\n\r]  匹配除换行符之外的任何一个字符
// \d    [0-9]                   匹配数字
// \D    [^0-9]                  匹配非数字字符
// \s    [ \n\r\t\f\x0B]         匹配一个空白字符
// \S    [^ \n\r\t\f\x0B]        匹配一个非空白字符
// \w    [a-zA-Z0-9_]            匹配字母数字和下划线
// \W    [^a-zA-Z0-9_]           匹配除字母数字下划线之外的字符



// 代码  描述
// *     匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。 * 等价于{0,}。
// +     匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
// ?     匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 中的"do" 。? 等价于 {0,1}。
// {n}   n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
// {n,}  n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
// {n,m} m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。刘， "o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。
  },
  methods: {

  },
  components: {

  }
}
</script>
