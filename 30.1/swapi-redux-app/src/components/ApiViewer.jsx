import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFromUrl, clearData} from '../store/slices/apiSlice';
import JsonDisplay from './JsonDisplay';

const BASE_URL = 'https://swapi.py4e.com/api/';

export default function ApiViewer() {
    const [inputPath, setInputPath] = useState('');
    const dispatch = useDispatch();
    const {path, jsonData, loading, error} = useSelector((state) => state.api);

    const handleFetch = () => {
        if (inputPath.trim()) {
            dispatch(fetchFromUrl(inputPath));
        }
    };

    const handleClear = () => {
        setInputPath('');
        dispatch(clearData());
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleFetch();
        }
    };

    return (<div className="api-viewer">
        <div className="input-section">
            <div className="url-builder">
                <div className="base-url-badge">
                    {BASE_URL}
                </div>
                <input
                    type="text"
                    className="path-input"
                    value={inputPath}
                    onChange={(e) => setInputPath(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="people/1"
                />
            </div>
            <button className="btn btn-fetch" onClick={handleFetch}>
                Get info
            </button>
        </div>

        <JsonDisplay
            data={jsonData}
            loading={loading}
            error={error}
            path={path}
            onClear={handleClear}
        />
    </div>);
}