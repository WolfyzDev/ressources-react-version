type VideoProps = {
    id: string
}

export const Home :React.FC<VideoProps> = ( { id } ) => {
    
    return (
        <div>
            <iframe width="560" height="315" 
            src={ "https://www.youtube.com/embed/yHoI0n2VxMU" + id }
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}