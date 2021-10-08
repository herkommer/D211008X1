exports.index = (req, res) => {

    res.sendfile('./public/html/main.html');
 
};

exports.input = (req, res) => {

    console.log("data:" + req.body.txtNAME1);
    console.log("data:" + req.body.txtNAME2);
    res.sendfile('./public/html/main.html');
 
};
