import React, {Component} from 'react'

export default class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText:"",
            randomImg:"https://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange =this.handleChange.bind(this)
        this.handleChange = this.handleSubmit.bind(this)

    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json()) // this line of code is to turn the data into a json object.
            .then((response) => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({
                    allMemeImgs:memes
                })
            }) 
    }

    handleChange(event)
    {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }


    handleSubmit()
    {   
        // event.preventDefault()
        //get a random int(index in the array)
        const randNum =Math.floor(Math.random() * this.state.allMemeImgs.length)
        //get the meme from that index
        const randMemeImg = this.state.allMemeImgs[randNum].url
        // get `randomimg` to the .url of the random item i grabbed
        this.setState({randomImg: randMemeImg})
    }
    render()
    {
        return(
            <div>
                    <form className='meme-form form-inline justify-content-center justify-content-around' onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="">Top text : </label>
                        <input type="text" name="topText" className="form-control" value={this.state.topText} placeholder="Top Text"
                        onChange={this.handleChange} />

                    </div> <div class="form-group">
                        <label for=""></label>
                        <label for="">Bottom text : </label>
                        <input type="text" name="bottomText" className="form-control" value={this.state.bottomText} placeholder="Bottom Text"
                        onChange={this.handleChange} />
                            
                            </div>
                    </form>
                   

                    
                    <div className="container justify-content-center">
                    <img src ={this.state.randomImg} alt="Pic is not available for now or Check your internet connection" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom"> {this.state.bottomText}</h2>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.handleSubmit}>Gen</button>
            </div>
        )
    }

}