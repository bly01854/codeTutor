import AuthService from "../components/AuthService";
import {getProjects} from "./projects";

export function selectFile(file){
    return {
        type: 'SELECT_FILE',
        file
    }
}

export function fileSaving(saving){
    return {
        type: 'FILE_SAVING',
        saving
    }
}

export function fileErrored(error) {
    return {
        type: 'FILE_ERRORED',
        error
    }
}
export function createFile(id, name, type){
    return dispatch => {
        const authService = new AuthService();
        const uid = authService.getProfile().id
        authService.fetchAuth('/api/file/create', {
            method: 'POST',
            body: JSON.stringify({
                projectId: id,
                name,
                type,
            })
        })
        .then(file => {
            dispatch(getProjects(uid))
        })
        .catch(err => {
            dispatch(fileErrored(err))
        })
    }
}

export function saveFile(id, content){
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(fileSaving(true))
            dispatch(fileErrored(null))
            const auth = new AuthService();
            auth.fetchAuth('/api/file/save', {
                method: "POST",
                body: JSON.stringify({id, content})
            })
            .then(() => {
                dispatch(fileSaving(false))
                resolve()
            })
            .catch((error) => {
                console.log(error)
                dispatch(fileSaving(false))
                dispatch(fileErrored(error))
                reject()
            })

        })
    }
}