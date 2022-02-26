import { useEffect, useState } from "react"
import { InnovationsItem } from "./InnovationsItem"
import { CONTANTS } from "../utils/constants"

export const Innovations = ({ moreInnovation }) => {
    // Массив данных ссылок до сортирования по дате
    const [innovationsList, setInnovationsList] = useState(CONTANTS.innovationsList);
    // Сюда будет попадать отсортированные по дате данные ссылок
    const [sortInnovation, setSortInnovation] = useState([]);

    useEffect(() => {
        // При нажатии кнопки "Read more" добавляю новые данные в массив
        if (moreInnovation) {
            for (let i = 0; i < moreInnovation.length; i++) {
                setInnovationsList(prev => {
                    return [
                        ...prev, 
                            {...moreInnovation[i], 
                                img: [CONTANTS.imagesDesktop][i % 3], 
                                imgMobile: [CONTANTS.imagesMobile][i % 3]
                            }
                    ]
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