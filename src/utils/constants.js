import desktopInnovation1 from '../img/desktop/img1.png'
import desktopInnovation2 from '../img/desktop/img2.png'
import desktopInnovation3 from '../img/desktop/img3.png'

import mobileInnovation1 from '../img/mobile/img1.png'
import mobileInnovation2 from '../img/mobile/img2.png'
import mobileInnovation3 from '../img/mobile/post3.png'

export const CONTANTS = {

    // Первоначальные значения ссылок. 
    // Указал им большую дату, чтобы при сортировке они не поменяли своего порядка в массиве и соответственно расположения на странице
    innovationsList: [
        {
            title: 'Instagram FAQ — All You Need To Know', 
            url: 'https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b', 
            img: desktopInnovation1, 
            imgMobile: mobileInnovation1, 
            date: '9999-09-20'
        },

        {
            title: 'DMEXCO 2019 — Meet Combin in Cologne', 
            url: 'https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63', 
            img: desktopInnovation2, 
            imgMobile: mobileInnovation2, 
            date: '9998-09-20'
        },

        {
            title: 'Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1', 
            url: 'https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7', 
            img: desktopInnovation3, 
            imgMobile: mobileInnovation3, 
            date: '9997-09-20'
        }
    ],

    imagesDesktop: [desktopInnovation1, desktopInnovation2, desktopInnovation3],

    imagesMobile: [mobileInnovation1, mobileInnovation2, mobileInnovation3]
}