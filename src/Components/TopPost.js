import React from 'react'
import moment from 'moment'

function TopPost (props) {
    const { data } = props
    return (

        <div className="row">
            <div className="col-md-4">
            <button type="button" className="btn btn-outline-success btn-sm"> {data.answer_count}</button>
            </div>

            <div className="col-md-6">
                <div className="row">
                    <div className="col-12">
                        <div className="text-primary">{data.title}</div>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                {moment(data.last_activity_date).format('DD-MM-YYYY') }
            </div>
        </div>
    )
}

export default TopPost 
