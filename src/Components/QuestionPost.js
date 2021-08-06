import React from 'react'

function QuestionPost(props) {
    const { data } = props
    return (

        <div className="row">
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-4">
                        <button type="button" className="btn btn-outline-secondary btn-sm">
                            <div>{data.score}</div>
                            <div>Vote</div>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-outline-success btn-sm">
                            <div>{data.answer_count}</div>
                            <div>answers</div>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-outline-secondary btn-sm"> <div>{data.view_count}</div>
                            <div>views</div></button>
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <div className="row">
                    <div className="col-12">
                        <div className="text-primary">{data.title}</div>

                    </div>
                    <div className="col-md-6">

                        <div className="row">
                            {data.tags.map((tag) => {
                                return (
                                    <div className="col-3" >
                                        <button type="button" className="btn btn-outline-secondary btn-sm"> {tag}</button>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-primary fs-6" onClick={() => { props.history.push({ pathname: '/userProfile', search: `${data.owner.user_id}` }) }}>{data.owner.display_name}</div>
                    </div>
                </div>
            </div><hr />
        </div>
    )
}

export default QuestionPost
