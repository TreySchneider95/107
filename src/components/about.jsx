import "./about.css"

const About = () => {
    const exercise = ()=>{
        const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10]
        let total = 0
        let oldest = ages[0]
        let youngest = ages[0]
        for(let x=0;x<ages.length;x++){
            total = total + ages[x]
            if(ages[x] > oldest){
                oldest = ages[x]
            }
            if(ages[x] < youngest){
                youngest = ages[x]
            }
        }
        console.log(total)
        console.log(oldest)
        console.log(youngest)
    }
    return (
        <div className="about-page">
            <h1>My Online Store</h1>
            <h5>Created by: Trey Schneider</h5>
            <button onClick={exercise}>Do the magic!</button>
        </div>
    )
}

export default About