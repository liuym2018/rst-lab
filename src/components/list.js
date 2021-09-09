

const List = (props) => {
    let today = Date.now();
    let createdTime = props.list.created_at_i;

    function diff_years(end, today) {
        var diff = (end - today) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff / 365.25));

    }

    let timeDifference = diff_years(today, createdTime);
    let time = '';

    if (timeDifference < 12) {
        time = timeDifference + " months ago";
    } else {
        time = Math.floor(timeDifference / 12) + " years ago";
    }

    return <div className="list">
        <div className="detail">
            <span className="title">{props.list.title}</span>
            <a className="listLink" href={props.list.url}>({props.list.url})</a>
        </div>
        <div className="subDetails">
            <span>{props.list.points}</span>
            <span className="subDetailSeparator">|</span>
            <span>{props.list.author}</span>
            <span className="subDetailSeparator">|</span>
            <span>{time}</span>
            <span className="subDetailSeparator">|</span>
            <span>{props.list.num_comments}</span>
        </div>
    </div>
}


export default List;