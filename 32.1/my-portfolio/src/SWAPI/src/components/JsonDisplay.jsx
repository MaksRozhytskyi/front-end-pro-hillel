export default function JsonDisplay({data, loading, error, path, onClear}) {
    if (loading) {
        return (<div className="json-display loading">
            <div className="loader">Loading...</div>
        </div>);
    }

    if (error) {
        return (<div className="json-display error">
            <div className="error-message">
                Error: {error}
            </div>
        </div>);
    }

    if (!data) {
        return (<div className="json-display empty">
            <div className="empty-message">
                No data loaded
            </div>
        </div>);
    }

    const pathTags = path.split('/').filter(tag => tag);

    return (<div className="json-display success">
        <div className="json-path-tags">
            {pathTags.map((tag, index) => (<span key={index} className="path-tag">
            {tag}
          </span>))}
        </div>
        <div className="json-content">
        <pre className="json-code">
          {JSON.stringify(data, null, 2)}
        </pre>
        </div>
        <button className="btn btn-clear" onClick={onClear}>
            Clear
        </button>
    </div>);
}