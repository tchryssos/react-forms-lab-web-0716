const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem:"",
      poemValid:false
    }

    this.poemWriting=this.poemWriting.bind(this)
    this.poemValidator=this.poemValidator.bind(this)
  }

    poemWriting(e){
      this.setState({
        poem:e.target.value
      }, function(){
        this.poemValidator(this.state.poem)
      })
    }

    poemValidator(poem){
      if (poem!=""){
        let numLines=poem.match(/\n/g).length+1
        let splitPoem=poem.split(/\n/)
        if (numLines != 3){
          return false
        } else {
          let firstLine=splitPoem[0].trim().split(" ")
          let secondLine=splitPoem[1].trim().split(" ")
          let thirdLine=splitPoem[2].trim().split(" ")
          if (firstLine.length === 5 && secondLine.length === 3 && thirdLine.length === 5){
            this.setState({
              poemValid: true
            })
          } else {
            return false
          }
        }
      }
    }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poemWriting}/>
        {!this.state.poemValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}


module.exports = PoemWriter;
