export const fetchUsers = () => (
  $.ajax({
    url: "/api/users"
  }))

  export const fetchUser = username => (
    $.ajax({
      url: `/api/users/${username}`
    })
  )