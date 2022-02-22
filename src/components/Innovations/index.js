import { useEffect, useState } from "react"
import { InnovationsItem } from "../InnovationsItem"
import innovation1 from '../../img/desktop/img1.png'
import innovation2 from '../../img/desktop/img2.png'
import innovation3 from '../../img/desktop/img3.png'

export const Innovations = ({ moreInnovation }) => {
    // Массив данных ссылок до сортирования по дате
    const [innovationsList, setInnovationsList] = useState([
        // Первоначальные значения ссылок. 
        // Указал им большую дату, чтобы при сортировке они не поменяли своего порядка в массиве и соответственно расположения на странице
        {title: 'Instagram FAQ — All You Need To Know', url: 'https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b', img: innovation1, date: '9999-09-20'},
        {title: 'DMEXCO 2019 — Meet Combin in Cologne', url: 'https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63', img: innovation2, date: '9998-09-20'},
        {title: 'Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1', url: 'https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7', img: innovation3, date: '9997-09-20'},
    ]);
    // Сюда будет попадать отсортированные по дате данные ссылок
    const [sortInnovation, setSortInnovation] = useState([])

    useEffect(() => {
        // При нажатии кнопки "Read more" добавляю новые данные в массив
        if (moreInnovation) {
            for (let i = 0; i < moreInnovation.length; i++) {
                setInnovationsList(prev => {
                    return [...prev, {...moreInnovation[i], img: [innovation1, innovation2, innovation3][i % 3]}]
                })
            }
        }
    }, [moreInnovation])

    // После загрузки всех данных отправляю на сортировку
    useEffect(() => {
        if (!innovationsList.length) return;
        sortArray();
    }, [innovationsList])

    // Сортирую по дате
    const sortArray = () => {
        let sortedArray = innovationsList
        sortedArray = innovationsList.sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortInnovation(sortedArray)
    }

    return (
        <section className="innovations-wrp">
            <h2 className="innovations-title">What's new?</h2>
            <div className="innovations">
                {sortInnovation.map((innovation, i) => <InnovationsItem innovation={innovation} key={i} />)}
            </div>
        </section>
    )
}