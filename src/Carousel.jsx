import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }

    handleIndexClick = (e) => {
        this.setState({
            // +: takes a string and turns it into a number
            active: +e.target.dataset.index
        })
    }

    render() {
        const { active } = this.state
        const { images } = this.props
        // Cannot use hooks here because we are using class component here :(
        // Also Error Boundaries must be written as a class component

        return (
            <div className='carousel'>
                <img src={images[active]} alt="animal hero" />
                <div className='carousel-smaller'>
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            onClick={this.handleIndexClick}
                            // * Everything that is in the DOM is a string, even a number
                            data-index={index}
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel