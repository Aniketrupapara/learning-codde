import React from 'react'
import { useEffect, useState } from 'react'
import TopPost from './TopPost'

const UserProfile = (props) => {

  const [userid, setUserid] = useState('')

  const [usertag, setUsertag] = useState('')

  const [userpost, setUserpost] = useState('')


  let t = props.location.search + ''
  const urlid = `https://api.stackexchange.com/2.3/users/${t.substring(1)}?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=reputation&filter=default`

  const fetchDataById = async () => {
    try {
      const response = await fetch(urlid);
      const json = await response.json();

      setUserid(json.items[0])

    } catch (error) {
      console.log("error", error);
    }
  };





  const tag_url = `https://api.stackexchange.com/2.3/users/${t.substring(1)}/tags?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=popular&filter=default`

  const fetchDataByTag = async () => {
    try {
      const response = await fetch(tag_url);
      const json = await response.json();

      setUsertag(json.items)

    } catch (error) {
      console.log("error", error);
    }
  };



  const post_url = `https://api.stackexchange.com/2.3/users/${t.substring(1)}/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default`

  const fetchDataByPost = async () => {
    try {
      const response = await fetch(post_url);
      const json = await response.json();

      setUserpost(json.items)

    } catch (error) {
      console.log("error", error);
    }
  };



  useEffect(() => {
    fetchDataById();
    fetchDataByTag();
    fetchDataByPost();
  }, []);



  return (
    <div className="container mt-4">
      {userid &&
        <div className="row">


          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src={userid.profile_image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{userid.reputation} Reputation</h5>



                <div className="row">

                  <div className="col-md-4">
                    <button type="button" class="btn btn-outline-dark">{userid.badge_counts.bronze}</button>
                  </div>
                  <div className="col-md-4">
                    <button type="button" class="btn btn-outline-warning">{userid.badge_counts.gold}</button>
                  </div>
                  <div className="col-md-4">
                    <button type="button" class="btn btn-outline-secondary">{userid.badge_counts.silver}</button>

                  </div>

                </div>
              </div>
            </div>

          </div>
          <div className="col-md-8">
            <div className="mt-4 mb-4">
              <h2>{userid.display_name}</h2>
              {userid.location && <div>{userid.location}</div>}
              {userid.link && <a href={userid.link}>Check website</a>}
            </div>
            <div className="row">
              <h3>Top Tags</h3>
              <div className="row">
                {usertag && usertag.map((tag) => {
                  return (
                    <div className="col-md-3">
                      <button type="button" class="btn btn-outline-info">
                        {tag.name} : <span class="badge bg-secondary"> Score {tag.count}</span>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
            <section>
              <h3 className="text-warning">Top Post</h3>
              {userpost && userpost.map(res => <TopPost data={res} history={props.history} />)}
            </section>
          </div>
        </div>
      }

    </div>
  )
}



export default UserProfile
