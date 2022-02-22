

export const InnovationsItem = ({ innovation }) => {
    return (
        <>
        <section className="innovations-item-wrp">
            <a className="innovations-item" href={innovation.url} target='_blank' rel="noreferrer" >
                <img className="innovations-item-preview" src={innovation.img} alt="innovation-preview" height="486" />
                <h3 className="innovations-item-title">{innovation.title}</h3>
            </a>
        </section>
        </>
    )
}