const defaultTable = {
    data: ['داده'],
    courses: [
        'رابط کاربری',
        'گواهی نامه ها و مجوز ها',
        'سهولت استفاده',
        'پشتیبانی',
        'تنوع',
        'سرعت',
        'حریم خصوصی',
        'امنیت',
        'استفاده از خط فرمان',
        'قابل اطمینان',
        'بروزسانی',
        'بازی',
    ]
}

const detailsComputersSystemOperation =
    {
        windows: [
            {information: 'مناسب و ساده', rate: 4.1},
            {information: 'مجوز دسترسی نمیدهد', rate: 3.4},
            {
                information: 'نوارابزار و نصب آسان برنامه‌ها، آن را به‌عنوان یک گزینه برای کاربران جدید و قدیمی',
                rate: 3.8
            },
            {information: 'پشتیبانی قابل‌دسترس ساده‌ای از طریق سیستم‌های کمکی آنلاین', rate: 4},
            {information: 'تعدادانگشت شمار', rate: 2.6},
            {information: 'محدود و ازاردهنده ', rate: 3.3},
            {information: 'تبلغ محور شده', rate: 3.7},
            {information: 'نشان دادن ضعف در برابر هکر ها', rate: 3.8},
            {information: 'cmd', rate: 4.1},
            {information: 'نشان دادن ضعف', rate: 3.5},
            {information: 'اجباری و غیر ضروری', rate: 3.5},
            {information: 'قدرمنده', rate: 4.5},
        ],
        linux: [
            {information: 'توصیه برای کاربران عادی نمیشود', rate: 3.2},
            {information: 'GNU General Public رایگان و قابل توصیه   ', rate: 4.7},
            {
                information: 'بروزرسانی‌های مداوم، افراد بدون داشتن دانش فنی و یا میزان کمی از آن هم می‌توانند نرم‌افزار نصب کنند',
                rate: 33
            },
            {information: 'شتیبانی آنلاین گسترده‌تری از آن موجود است', rate: 4.1},
            {information: 'بیش از 100 نسخه', rate: 4.4},
            {information: 'قابل قبول', rate: 3.8},
            {information: 'دستگاه‌های لینوکس هم مجهز به رمزنگاری داخلی هستند', rate: 4.1},
            {information: 'به شدت امنیت فوق العاده', rate: 4.3},
            {information: 'خط فرمان در ترمینال', rate: 4.2},
            {information: 'در گذر زمان رشد عالی', rate: 3.8},
            {information: 'کاملا اختیاری', rate: 4.1},
            {information: 'ضعف', rate: 2.4},
        ],
        mac: [
            {information: 'مناسب و ساده', rate: 4.2},
            {information: 'مجوز دسترسی نمیدهد', rate: 4.5},
            {information: '', rate: 33},
            {information: 'پشتیبانی قابل‌دسترس ساده‌ای از طریق سیستم‌های کمکی آنلاین', rate: 3.8},
            {information: 'نسخه های محدود', rate: 3.7},
            {information: 'سرعت بالا', rate: 4},
            {information: 'قابلیت قطع کردن دسترسی', rate: 3.9},
            {information: 'امنیت قابل قبول', rate: 3.3},
            {information: 'رابط کاربری و ترمینال', rate: 4.3},
            {information: 'عنوان یک سیستم عامل کامپیوترهای سری Macintosh استفاده می شود ، فراهم می کند.', rate: 3.7},
            {information: ' بروزرسانی سخت افزار در رایانه های Mac دشوار است', rate: 2.9},
            {information: 'غیرقابل قبول', rate: 1.2},
        ],
    };

$(document).ready(() => {
    $('.btnCompare').each((e, a) => {
        $(this).on('click', clicked => {
            if (!$(this).hasClass('active')) {
                compare(clicked.target.getAttribute('for'), defaultTable.courses)
                $(this).addClass('active')
            } else {
                compare(undefined, defaultTable.courses)
                $(this).removeClass('active')
            }
        })
    })

    function compare(e, defaultT) {
        if (e !== undefined) {
            var result = typeOfSystemOperation(e)
            var table = `
            <thead>
            <tr><th>${defaultTable.data}</th>
            <th>${result[1]}</th></tr>
            </thead><tbody>`
            ;
            defaultT.map((e, index) => {
                table += `
                    <tr>
                        <th>${e}</th>
                        <th>${result[0][index].information}</th>
                    </tr>`;
            })
            table += `<tbody>`;

            $('.table').html(table)
        } else {
            var table = `<thead><tr><th>${defaultTable.data}</th></thead>`;
            console.log(defaultT)
            defaultT.map((e, index) => {
                table += `<tbody>
                    <tr>
                        <th>${e}</th>
                    </tr>
                </tbody>`
            })
            $('.table').html(table)
        }
    }

    function typeOfSystemOperation(e) {
        switch (e) {
            case "WindowsBtn":
                return [detailsComputersSystemOperation["windows"], 'ویندوز']
                break;
            case "LinuxBtn":
                return [detailsComputersSystemOperation["linux"], 'لینوکس']
                break;
            case "MacbookBtn":
                return [detailsComputersSystemOperation["mac"], 'مک']
                break;
        }
    }
})