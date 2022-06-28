import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="text-3xl font-bold">
                Hello world!
            </h1>
            <button
                className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-500">Button
            </button>

        </div>
    )
}

export default Home
