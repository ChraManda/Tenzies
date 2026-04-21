
import Die from './components/Die'
export default function App() {
    return (
        <>
            <main>
                <div className='button-container'>
                    <Die value={5}/>
                    <Die value={3}/>
                    <Die value={1}/>
                    <Die value={3}/>
                    <Die value={4}/>
                    <Die value={6}/>
                    <Die value={4}/>
                    <Die value={3}/>
                    <Die value={1}/>
                    <Die value={1}/>
                </div>
            </main>
        </>
        )
}
