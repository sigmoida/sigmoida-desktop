const Bluetooth = () => {

    async function testIt () {
        const device = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true
        })
        document.getElementById('device-name').innerHTML = device.name || `ID: ${device.id}`
    }

    function cancelRequest () {
        window.electronAPI.cancelBluetoothRequest()
    }

    function openApp () {
        window.electronAPI.openApp()
    }

    window.electronAPI.bluetoothPairingRequest((event, details) => {
        const response = {}
      
        switch (details.pairingKind) {
            case 'confirm': {
                response.confirmed = window.confirm(`Do you want to connect to device ${details.deviceId}?`)
                break
            }
            case 'confirmPin': {
                response.confirmed = window.confirm(`Does the pin ${details.pin} match the pin displayed on device ${details.deviceId}?`)
                break
            }
            case 'providePin': {
                const pin = window.prompt(`Please provide a pin for ${details.deviceId}.`)
                if (pin) {
                    response.pin = pin
                    response.confirmed = true
                } else {
                    response.confirmed = false
                }
            }
        }
      
        window.electronAPI.bluetoothPairingResponse(response)
    })

    return (

        <div className='space-y-4'>

            <div className='text-2xl'>Bluetooth</div>

            <div className='space-x-2'>
                <button onClick={testIt} className='rounded-lg px-2 py-1 border-2 border-black bg-slate-300'>Test Bluetooth</button>
                <button onClick={cancelRequest} className='rounded-lg px-2 py-1 border-2 border-black bg-slate-300'>Cancel Bluetooth Request</button>
            </div>
           

            <p>Currently selected bluetooth device: <strong id="device-name"></strong></p>

            <button onClick={openApp} className='rounded-lg px-2 py-1 border-2 border-black bg-slate-300'>Open App</button>
            
        </div>

    );
}

export default Bluetooth;