const express=require('express');
const {handleGetAllUsers}=required('../controllers/user');
const router =express.Router();


// router.get('/',async function (req, res) {
//     const allDbUsers=await User.find({});
//     const html = `<ul>${users.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join("")}</ul>`;
//     res.send(html);
//     console.log(allDbUsers);
    
// });

// router.get('/api/users', (req, res) => {
//     return res.json(users);
// });

router.route("/:id")
    .get((req, res) => {
        const id = req.params.id;
        const user = users.find((user) => user.id == id);
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ status: 'pending' });
    })
    .delete((req, res) => {
        return res.json({ status: 'pending' });
    });

router.post('/', async (req, res) => {
    // res.setHeader("X-myname", "Santosh Patel");
    const body = req.body;

    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(404).json({ msg: 'All fields required' });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    console.log(result);

    return res.status(201).json({ msg: "Success" });
});

// Server Start
module.exports=router;