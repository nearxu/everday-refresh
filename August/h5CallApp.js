// 沙盒 的机制：应用只能访问它声明可能访问的资源

// 实现应用通信， URL Scheme 就是这个工具

// URL Scheme 在 ios 9+ 上诸如 safari、UC、QQ浏览器中，
//  iframe 均无法成功唤起 APP，只能通过 window.location 才能成功唤端。
// 对于ios来说，location.href跳转更合适