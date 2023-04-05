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

const defaultTableSP = {
    data: ['سیستم عامل'],
    courses: [
        'تاریخ اولین عرضه',
        'آخرین نسخه',
        'انتقال اطلاعات',
        'ویجت (ابزارک‌ها)',
        'نرم افزار وب گردی',
        'نرم افزار ردیابی',
        'نرم افزار تماس تصویری',
        'دستیار صوتی',
        'نرم افزار دانلود برنامه',
        'میزان مصرف باتری',
        'گالری پیش فرض',
        'امنیت',
        'افزایش دسترسی کاربران',
        'نحوه باز گشایی قفل صفحه',
        'قابل دسترس در کمپانی‌های',
        'قابل استفاده با زبان‌های مختلف',
        'اوپن سورس',
        'فایل منیجر (میدریت فایل‌ها)',
        'فضاهای ابری',
        'خانواده سیستم عامل',
        'پشتیبانی از جک 3.5 میلی متری',
        'طراحی کننده سیستم عامل',
        'نوع سورس',
        'نرم افزار ارسال پیام',
        'برنامه‌های موجود',
        'امکان نصب برنامه‌ها',
        'نحوه کار کردن با سیستم عامل'
    ]
}

const detailsComputersSystemOperation = {
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
        {information: 'cmd', rate: 2.1},
        {information: 'نشان دادن ضعف', rate: 3.5},
        {information: 'اجباری و غیر ضروری', rate: 3.5},
        {information: 'قدرمنده', rate: 4.5},
    ],
    linux: [
        {information: 'توصیه برای کاربران عادی نمیشود', rate: 3.2},
        {information: 'GNU General Public رایگان و قابل توصیه   ', rate: 4.7},
        {
            information: 'بروزرسانی‌های مداوم، افراد بدون داشتن دانش فنی و یا میزان کمی از آن هم می‌توانند نرم‌افزار نصب کنند',
            rate: 3.1
        },
        {information: 'شتیبانی آنلاین گسترده‌تری از آن موجود است', rate: 4.1},
        {information: 'بیش از 100 نسخه', rate: 4.4},
        {information: 'قابل قبول', rate: 3.8},
        {information: 'دستگاه‌های لینوکس هم مجهز به رمزنگاری داخلی هستند', rate: 4.1},
        {information: 'به شدت امنیت فوق العاده', rate: 4.3},
        {information: 'خط فرمان در ترمینال', rate: 4.2},
        {information: 'در گذر زمان رشد عالی', rate: 2.8},
        {information: 'کاملا اختیاری', rate: 4.1},
        {information: 'ضعف', rate: 1.4},
    ],
    mac: [
        {information: 'مناسب و ساده', rate: 4.2},
        {information: 'مجوز دسترسی نمیدهد', rate: 4.5},
        {information: 'اسنفاده از فضا کلود', rate: 2.2},
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

const detailsComputersSystemOperationPS = {
    android: [
        {information: '23 سپتامبر سال 2008', rate: '-'},
        {information: 'اندروید 13', rate: '-'},
        {information: 'بسیار زیاد', rate: 4.2},
        {information: 'بسیار ساده با استفاده از File Manger', rate: 3.9},
        {information: 'پشتیبانی می‌کند حتی در Lock Screen', rate: '-'},
        {information: 'گوگل کروم', rate: '-'},
        {information: 'گوگل مپ', rate: '-'},
        {information: 'گوگل میت و دیگر برنامه‌ها', rate: '-'},
        {information: 'دستیار صوتی گوگل', rate: '-'},
        {information: 'فروشگاه گوگل پلی', rate: '-'},
        {information: 'مصرف باتری در بسیاری از گوشی‌ها زیاد است', rate: 2.4},
        {information: 'Google Photos', rate: '-'},
        {information: 'انتشار آپدیت‌های امنیتی ماهانه', rate: 4},
        {information: 'از طریق روت کردن', rate: '-'},
        {information: 'تشخیص چهره دو بعدی و حسگر اثر انگشت', rate: 2.2},
        {information: 'وان پلاس، اوپو، شیائومی، سامسونگ، نوکیا و گوگل', rate: '-'},
        {information: 'پشتیبانی بیش از 100 زبان', rate: 4.5},
        {information: 'کرنال (بر اساس لینوکس)', rate: '-'},
        {information: 'پشتیبانی می‌کند بر اساس File Manager', rate: 3.7},
        {information: 'Google Drive با 15 گیگابایت فضای رایگان', rate: 3.9},
        {information: 'لینوکس', rate: '-'},
        {information: 'تعدادی از گجت‌های اندرویدی', rate: '-'},
        {information: 'گوگل', rate: '-'},
        {information: 'Open Source', rate: 4},
        {information: 'نرم افزار نصب شده در گجت و دیگر برنامه‌های موجود', rate: '-'},
        {information: 'بیش از 2 میلیون', rate: 4.5},
        {information: 'کاربران می‌توانند نرم افزارهایی را از سایت‌های متفرقه نصب کنند', rate: 4.4},
        {information: 'از طریق لمس صفحه', rate: '-'},
    ],
    ios: [
        {information: '29 جولای سال 2007', rate: '-'},
        {information: 'iOS 15.3.1', rate: '-'},
        {information: 'بسیار محدود', rate: 2.2},
        {information: 'بسیار دشوار و نیاز به برنامه‌های مختلف', rate: 1.5},
        {information: 'پشتیبانی می‌کند', rate: '-'},
        {information: 'سافاری', rate: '-'},
        {information: 'اپل مپ', rate: '-'},
        {information: 'فیس تایم و دیگر برنامه‌ها', rate: '-'},
        {information: 'دستیار صوتی سیری (Siri)', rate: '-'},
        {information: 'فروشگاه اپل', rate: '-'},
        {information: 'مصرف باتری متوسط', rate: 3.5},
        {information: 'iCloud', rate: '-'},
        {information: 'بسیار بالا و غیر قابل نفوذ', rate: 4.1},
        {information: 'از طریق Jailbreak', rate: '-'},
        {information: 'تشخیص چهره سه بعدی و حسگر اثر انگشت در گوشی‌های قدیمی', rate: 4},
        {information: 'شرکت اپل', rate: '-'},
        {information: 'پشتیبانی از 40 زبان', rate: 3.5},
        {information: 'عدم پشتیبانی از اوپن سورس، بهره بردن از Darwin OS', rate: '-'},
        {information: 'پشتیبانی می‌کند توسط Files app، اما دارای محدودیت', rate: 3.1},
        {information: 'iCloud با 5 گیگابایت فضای رایگان', rate: 3.1},
        {information: 'OS X و UNIX', rate: '-'},
        {information: 'تنها گوشی‌های قدیمی تر از iPhone 7', rate: '-'},
        {information: 'اپل', rate: '-'},
        {information: 'Closed', rate: 1.7},
        {information: 'نرم افزار iMessage و دیگر برنامه‌های موجود', rate: '-'},
        {information: 'حدود 1.5 میلیون', rate: 4.2},
        {information: 'امکان نصب برنامه تنها از طریق App Store', rate: 2.4},
        {information: 'از طریق لمس صفحهApp Store', rate: '-'},
    ]
}
$(document).ready(() => {
    $('.btnCompare').on('click', clicked => {
        if (!$(this).hasClass('active')) {
            compare(clicked.target.getAttribute('for'), defaultTable.courses, 'tcomputer')
            $(this).addClass('active')
        } else {
            compare(undefined, defaultTable.courses,)
            $(this).removeClass('active')

        }
    })

    $('.btnCompareSP').on('click', clicked => {
        if (!$(this).hasClass('active')) {
            compareSmartphone(clicked.target.getAttribute('for'), defaultTableSP.courses)
        }
    })

    function compare(e, defaultT,) {
        if (e !== undefined) {
            var result = typeOfSystemOperation(e)
            var table = `
            <thead class="table-dark">
            <tr>
            <th>${defaultTable.data}</th>
            <th>${result[1]}</th>
            <th>امتیاز</th>
            </tr></thead><tbody>`;

            defaultT.map((e, index) => {
                var rate = result[0][index].rate
                table += `
                    <tr>
                        <th>${e}</th>
                        <th>${result[0][index].information}</th>
                        <th class=${rating(rate)}>${rate}</th>
                    </tr>`;
            })
            table += `<tbody>`;

            $('.compareSystemComputer').html(table)
        } else {
            var table = `<thead><tr><th>${defaultTable.data}</th></thead>`;
            defaultT.map((e, index) => {
                table += `<tbody>
                    <tr>
                        <th>${e}</th>
                    </tr>
                </tbody>`
            })
            $('.compareSystemComputer').html(table)
        }
    }

    function compareSmartphone(e, defaultT) {
        if (e !== undefined) {
            var result = typeOfSystemOperationSmartphone(e)
            var table = `
            <thead class="table-dark">
            <tr>
            <th>سیستم عامل</th>
            <th>${result[1]}</th>
            <th>امتیاز</th>
            </tr>
            </thead><tbody>`;
            defaultT.map((e, index) => {
                var rate = result[0][index].rate
                table += `
                    <tr>
                        <th>${e}</th>
                        <th>${result[0][index].information}</th>
                        <th class=${rating(rate)}>${rate}</th>
                    </tr>`;
            })
            table += `<tbody>`;

            $('.t-smartphone').html(table)
        } else {
            var table = `<thead><tr><th>${defaultTable.data}</th></thead>`;
            defaultT.map((e, index) => {
                table += `<tbody>
                    <tr>
                        <th>${e}</th>
                    </tr>
                </tbody>`
            })
            $('.t-smartphone').html(table)
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

    function typeOfSystemOperationSmartphone(e) {
        switch (e) {
            case "AndroidBtn":
                return [detailsComputersSystemOperationPS["android"], 'اندروید']
                break;
            case "IosBtn":
                return [detailsComputersSystemOperationPS["ios"], 'ای او اس']
                break;
        }
    }

    function rating(e) {
        if (e < 2) {
            return 'leastScore'
        } else if (e > 2 && e < 3) {
            return 'appropriateScore'
        } else if (e > 2.9 && e <= 3.9) {
            return 'greatScore';
        } else if (e > 3.9) {
            return 'nealyPerfectScore';
        }
    }
})
