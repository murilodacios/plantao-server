import axios from 'axios';

async function createMeeting() {

    const apiZoom = axios.create({
        baseURL: "https://api.zoom.us/v2/users/me/meetings",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InVMajhmeUI4VHdTRHJtQ0ttVW90N2ciLCJleHAiOjE2MzU0Mzg3NzQsImlhdCI6MTYzNDgzMzk3NH0.Usg56mQRKkEBWz_e5qepw6EZJKqhxU7CRhro5-qIQBU"
        }
    })

    try {
        const meeting = await apiZoom.post('/', {
            topic: "Ticket Fazenda",
            type: 1,
            duration: 30,
            timezone: "America/Sao_Paulo",
            password: "123456",
            settings: {
              host_video: true,
              participant_video: true,
              cn_meeting: false,
              in_meeting: false,
              join_before_host: false,
              mute_upon_entry: false,
              watermark: false,
              use_pmi: false,
              approval_type: 2,
              registration_type: 1,
              audio: "both",
              auto_recording: "none",
              registrants_email_notification: true
            }
          })
        return meeting
    } catch (err) {
        console.error(err)
    }

}

export { createMeeting }