const detailsComputersSystemOperation =
    {
        windows: [
            {Interface: 'مناسب و ساده', rate: 4.1},
            {Certificates_permits: 'مجوز دسترسی نمیدهد', rate: 3.4},
            {easeOfUse: 'نوارابزار و نصب آسان برنامه‌ها، آن را به‌عنوان یک گزینه برای کاربران جدید و قدیمی', rate: 3.8},
            {Support: 'پشتیبانی قابل‌دسترس ساده‌ای از طریق سیستم‌های کمکی آنلاین', rate: 4},
            {Variety: 'تعدادانگشت شمار', rate: 2.6},
            {Speed: 'محدود و ازاردهنده ', rate: 3.3},
            {Privacy: 'تبلغ محور شده', rate: 3.7},
            {Security: 'نشان دادن ضعف در برابر هکر ها', rate: 3.8},
            {UsingTheCommandLine: 'cmd', rate: 4.1},
            {Trusted: 'نشان دادن ضعف', rate: 3.5},
            {Update: 'اجباری و غیر ضروری', rate: 3.5},
            {Game: 'قدرمنده', rate: 4.5},
        ],
        linux: [
            {Interface: 'توصیه برای کاربران عادی نمیشود', rate: 3.2},
            {Certificates_permits: 'GNU General Public رایگان و قابل توصیه   ', rate: 4.7},
            {
                easeOfUse: 'بروزرسانی‌های مداوم، افراد بدون داشتن دانش فنی و یا میزان کمی از آن هم می‌توانند نرم‌افزار نصب کنند',
                rate: 33
            },
            {Support: 'شتیبانی آنلاین گسترده‌تری از آن موجود است', rate: 4.1},
            {Variety: 'بیش از 100 نسخه', rate: 4.4},
            {Speed: 'قابل قبول', rate: 3.8},
            {Privacy: 'دستگاه‌های لینوکس هم مجهز به رمزنگاری داخلی هستند', rate: 4.1},
            {Security: 'به شدت امنیت فوق العاده', rate: 4.3},
            {UsingTheCommandLine: 'خط فرمان در ترمینال', rate: 4.2},
            {Trusted: 'در گذر زمان رشد عالی', rate: 3.8},
            {Update: 'کاملا اختیاری', rate: 4.1},
            {Game: 'ضعف', rate: 2.4},
        ],
        mac: [
            {Interface: 'مناسب و ساده', rate: 4.2},
            {Certificates_permits: 'مجوز دسترسی نمیدهد', rate: 4.5},
            {easeOfUse: '', rate: 33},
            {Support: 'پشتیبانی قابل‌دسترس ساده‌ای از طریق سیستم‌های کمکی آنلاین', rate: 3.8},
            {Variety: 'نسخه های محدود', rate: 3.7},
            {Speed: 'سرعت بالا', rate: 4},
            {Privacy: 'قابلیت قطع کردن دسترسی', rate: 3.9},
            {Security: 'امنیت قابل قبول', rate: 3.3},
            {UsingTheCommandLine: 'رابط کاربری و ترمینال', rate: 4.3},
            {Trusted: 'عنوان یک سیستم عامل کامپیوترهای سری Macintosh استفاده می شود ، فراهم می کند.', rate: 3.7},
            {Update: ' بروزرسانی سخت افزار در رایانه های Mac دشوار است', rate: 2.9},
            {Game: 'غیرقابل قبول', rate: 1.2},
        ],
    };

$(document).ready(() => {
    const $btncompare = $('.btnCompare')
    $btncompare.click(e => {
        if (!$btncompare.hasClass('active')) {
            compare(e.target.getAttribute('for'))
        } else {
            $btncompare.addClass('active')
        }
    })

    function compare(e) {
        var result = typeOfSystemOperation(e)
        console.log(result)
    }

    function typeOfSystemOperation(e) {
        switch (e) {
            case "WindowsBtn":
                return detailsComputersSystemOperation["windows"]
                break;
            case "LinuxBtn":
                return detailsComputersSystemOperation["linux"]
                break;
            case "MacbookBtn":
                return detailsComputersSystemOperation["mac"]
                break;
        }
    }
})