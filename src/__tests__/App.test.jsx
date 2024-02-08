import { render, screen, } from "@testing-library/react"
import App from "../App"
// import Welcome from "../components/Welcome"
import MyFooter from "../components/MyFooter"





// test sul Welcome della pagina
describe('General components test', () => {

    it('correctly mounts the welcome component', () => {

        render(<App />)

        const welcome = screen.getByText(/benvenuti in/i)

        expect(welcome).toBeInTheDocument()
    })
    // test Welcome ok


    // test sul Welcome della pagina
    it('correctly mounts ther footer component', () => {
        render(<MyFooter />)

        const footer = screen.getByText(/epicode/i)
        // const footer = screen.getByRole('footer')
        expect(footer).toBeInTheDocument()
    })
    // test footer ok

    // it('correctly mounts ther comment area component', () => {
    //     render(<CommentArea />)

    //     const areaComment = screen.get()
    //     // const footer = screen.getByRole('footer')
    //     expect(areaComment).toBeInTheDocument()
    // })
})

// describe('Comment area behavior', () => {
//     it('make add comment button active when clicked')

//     render(<App />)

//     const addComment = screen.getByRole('AddComment')

//     fireEvent.click(addComment)

// })
describe('Correct number of cards', () => {

    it('makes the number of cards correct', async () => {
        render(<App />)

        const numberOfCards = await screen.findAllByTestId('card')
        expect(numberOfCards).toHaveLength(150)
    })
})
// test ok


// describe('FetchComponent behavior', () => {

// })