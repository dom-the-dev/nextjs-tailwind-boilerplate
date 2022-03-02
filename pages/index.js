import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="text-center">

                <h1 className="text-6xl font-bold">
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <h2 className="text-4xl font-bold">This is a boilerplate by <a href="https://domthedev.com"
                                                                               target={"_blank"}
                                                                               rel="noopener noreferrer">Dom the Dev</a>
                </h2>

                <p>
                    Get started by editing{' '}
                    <code>pages/index.js</code>
                </p>

                <div className="grid gap-10">
                    <a href="https://nextjs.org/docs">
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn">
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/canary/examples">
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>

            </div>

        </Layout>
    )
}
