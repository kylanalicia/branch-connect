export const login = async (req, res, next) => {
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;

    } catch (error) {

    }
   
};

export const logout = (req, res, next) => {
    console.log('logoutUser');
}

export const signup = (req, res, next) => {
    console.log('signupUser');
}