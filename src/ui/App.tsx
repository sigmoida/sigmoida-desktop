import Layout from './Layout';

const App = () => {

    const connection = navigator.onLine ? 'Online' : 'Offline';

    return (
        <Layout>

            <div className='p-4 space-y-4'>
                <div>Connection: {connection}</div>
                <p>Welcome to Sigmoida Desktop App</p>
            </div>

        </Layout>
    );
}

export default App;