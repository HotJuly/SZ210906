import '@/index';
document.write('hello world!!')

console.log('我是main.js')


// 注意:此处由于不是上线版本,所需需要将文件路径写为相对路径
// 将register('/service-worker.js')改为register('./service-worker.js')
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}