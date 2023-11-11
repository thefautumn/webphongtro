import * as postService from '../services/post'

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsPage = async (req, res) => {
    const { page} = req.query
    try{
        const response = await postService.getPostsPageService(page)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsLimit = async (req, res) => {
    const { page, priceNumber, areaNumber, ...query } = req.query
    try {
        const response = await postService.getPostsLimitService(page, query, { priceNumber, areaNumber })
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const getNewPosts = async (req, res) => {
    try {
        const response = await postService.getNewPostService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const createNewPost = async (req, res) => {
    try {
        const { categoryCode, title, priceNumber, areaNumber, label  } = req.body
        const {id} = req.user
        if ( !categoryCode || !id || !title || !priceNumber || !areaNumber || !label) return res.status(400).json({
            err:1,
            msg: 'Missing inputs'
        })
        const response = await postService.createNewPostService(req.body,id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await postService.deletePostService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getOnePost = async (req, res) => {
    try {
        const id = req.query.idpost;
        if (!id) {
            return res.status(400).json({
              err: -1,
              msg: 'Missing idpost parameter',
            });
          }
        const response = await postService.getOnePostService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const updatePosts = async (req, res) => {
    try {
        const id = req.query.idpost;
        const {title,priceNumber,areaNumber,address,description} = req.body;
        if (!id || !title || !priceNumber || !areaNumber || !address || !description) {
            return res.status(400).json({
              err: -1,
              msg: 'Missing input parameter',
            });
          }
        const response = await postService.updatePosts(id , {title,priceNumber,areaNumber,address,description})
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}