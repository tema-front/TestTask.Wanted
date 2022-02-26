import { useEffect, useState } from "react"


export const InnovationsItem = ({ innovation }) => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", checkWidth)
        
        return (() => {
            window.removeEventListener("resize", checkWidth)
        })
    }, [])

    const checkWidth = () => {
        const widthPage = document.documentElement.scrollWidth;
        if (widthPage <= 320) {
            setMobile(true)
        } else setMobile(false)
    }

    return (
        <>
        <section className="innovations-item-wrp">
            <a className="innovations-item" href={innovation.url} target='_blank' rel="noreferrer" >
                {mobile ?    
                    <img className="innovations-item-preview" src={innovation.imgMobile} alt="innovation-preview" height="310" />
                    :
                    <img className="innovations-item-preview" src={innovation.img} alt="innovation-preview" height="486" />
                }
                <h3 className="innovations-item-title">{innovation.title}</h3>
            </a>
        </section>
        </>
    )
}