export function get(req, res) {
  const users = [
    {
      id: 1,
      name: "Hamzan Wahyudi",
      job: "Web Developer",
      email: "hamzankehcil@gmail.com",
      address: "Desa Langam",
    },
    {
      id: 2,
      name: "Fikro Najiah",
      job: "UI/UX Designer",
      email: "fikro@gmail.com",
      address: "Dusun Kemuning",
    },
    {
      id: 3,
      name: "Muhammad Helmi",
      job: "DevOps Enginer",
      email: "helm.otaku@gmail.com",
      address: "Desa Lopok",
    },
  ];
  res.render("users/index", { users });
}

export function post(req, res) {
  res
    .json({
      message: "User POST with status code 404 hehe",
    })
    .status(404);
}

export function put(req, res) {
  res
    .json({
      message: "User PUT here...",
    })
    .status(301);
}

export function destroy(req, res) {
  res
    .json({
      message: "User DELETE here...",
    })
    .status(201);
}
