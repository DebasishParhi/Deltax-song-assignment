import React, { useState, memo } from "react";
import Multiselect from "multiselect-react-dropdown";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
function AddNewSong() {
  const [Open, setOpen] = useState(false);

  const openPop = (e) => {
    e.preventDefault();
    setOpen(!Open);
  };
  const [artist, setArtist] = useState([
    "Arjit Sing",
    "Himesh Rasmiya",
    "Sreys Ghosal"
  ]);
  const [data, setData] = useState({
    date: "",
    artistname: "",
    bio: "",
    songname: "",
    datereleased: "",
    artwork: "",
    artists: "",
  });
  const [touched, setTouched] = useState({
    artistname: false,
    date: false,
    bio: false,
    songname: false,
    datereleased: false,
    artwork: false,
    artists: false,
  });


  const handleChange = (event) => {
    const changedInput = event.target.name;
    setData({ ...data, [changedInput]: event.target.value });
  };
  const handleBlur = (event) => {
    const blurredInput = event.target.name;
    setTouched({ ...touched, [blurredInput]: true });
  };
  let artistnameError = "";
  let dateBirthError = "";
  let bioError = "";
  let songError = "";
  let dateReleasedError = "";
  let artworkError = "";
  let artistsError = "";

  if (!data.artistname) {
    artistnameError = "Artist Name  is required";
  } else if (data.artistname.length < 2) {
    artistnameError = "please enter full name";
  } else {
    artistnameError = "cool";
  }

  if (!data.date) {
    dateBirthError = "date is Require";
  } else dateBirthError = "";
  if (!data.bio) {
    bioError = "Bio  Require";
  }
  if (!data.songname) {
    songError = "Song Name required";
  } else if (data.songname.length < 2) {
    songError = "please enter full song name";
  } else {
    songError = "";
  }
  if (!data.datereleased) {
    dateReleasedError = "Select a date";
  } else {
    dateReleasedError = "";
  }
  if (!data.artwork) {
    artworkError = "";
  } else {
    artworkError = "";
  }
  if (!data.artists) {
    artistsError = "";
  } else {
    artistsError = "";
  }

  return (
    <>
      {Open && (
        <Popup
          content={
            <>
              <form
                className="popup-form-control"
                onSubmit={(event) => {
                  event.preventDefault();
                  console.log(data);
                }}
              >
                <h1 >Add Artist</h1>
                <div className="input-controls">
                  <div className="input-names">
                    <div className="name">Artist Name</div>
                    <div className="name">date of Birth</div>
                    <div className="name">Bio</div>
                  </div>
                  <div className="input-div">
                    <div className="input">
                      <input
                        name="artistname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        value={data.artistname}
                        autoComplete="off"
                      />
                      {touched.artistname && (
                        <div className="input errorMessage">
                          {artistnameError}
                        </div>
                      )}
                    </div>
                    <div className="input">
                      <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={data.date}
                        autoComplete="off"
                      />
                      {touched.date && (
                        <div className="input error Message">
                          {dateBirthError}
                        </div>
                      )}
                    </div>
                    <div className="input">
                      <textarea
                        type="text"
                        name="bio"
                        value={data.bio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {touched.bio && (
                        <div className="input errorMessage">{bioError}</div>
                      )}
                    </div>
                    <div className="input">
                      <button type="submit">Done</button>
                      <button onClick={openPop}>Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          }
          handleClose={openPop}
        />
      )}
      <form
        className="form-control"
      
        onSubmit={(event) => {
          event.preventDefault();
          console.log(data);
        }}
      >
        <h1 style={{ marginLeft: "29%" }}>Add New Songs</h1>
        <div className="input-controls">
          <div className="input-names">
            <div className="name">Song Name</div>
            <div className="name">Date Released</div>
            <div className="name">Artwork</div>
            <div className="name">Artist</div>
          </div>
          <div className="input-div">
            <div className="input">
              <input
                type="text"
                name="songname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={data.songname}
              />
              {touched.songname && (
                <div className="input errorMessage">{songError}</div>
              )}
            </div>
            <div className="input">
              <input
                type="date"
                name="datereleased"
                onChange={handleChange}
                onBlur={handleBlur}
                value={data.datereleased}
              />
              {touched.datereleased && (
                <div className="input errorMessage">{dateReleasedError}</div>
              )}
            </div>
            <div className="input">
              <input
                type="file"
                name="artwork"
                onChange={handleChange}
                onBlur={handleBlur}
                value={data.artwork}
              />
              {touched.artwork && (
                <div className="input errorMessage">{artworkError}</div>
              )}
            </div>
            <div className="input" id="add-artist">
              <Multiselect
                isObject={false}
                onRemove={(event)=>{console.log(event)}}
                onSelect={(event)=>{console.log(event)}}
                options={artist}
                showCheckbox
                 name="artists"
               
              />
              {touched.artists && (
                <div className="input errorMessage">{artistsError}</div>
              )}

              <button onClick={openPop} className="add-art-button">
                {" "}
                + Add Artist
              </button>
            </div>
            <div className="input-btn">
            <button><Link to="/" id="cancel-btn-color">
                  Save
                </Link>
                </button>
              <div className="cancel-btn">
                <Link to="/" id="cancel-btn-color">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default memo(AddNewSong);
