import axios from 'axios';
    const baseUrl = 'http://brida.us.tempcloudsite.com/api';

    const lang = localStorage.getItem('lang') || 'en';

    export async function getSettings() {
        let settings = [];
        const response = await axios.get(`${baseUrl}/allSettings`);
        settings = response.data;
        return settings;
    }

    export async function getServices() {
        let services = [];
        const response = await axios.get(`${baseUrl}/allService`,{
            headers: {
        'Accept-Language': 'en-US'
    }
        });
        services = response.data;
        return services;
    }

    export async function getBlogCategory() {
        let category = [];
        const response = await axios.get(`${baseUrl}/postCategory`, {
            headers: {
                'Accept-Language': 'en-US'
            }
        });
        category = response.data;
        return category;
    }

    export async function getPosts() {
        let posts = [];
        const response = await axios.get(`${baseUrl}/allPost`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        posts = response.data;
        return posts;
    }

    export async function getProjects() {
        let posts = [];
        const response = await axios.get(`${baseUrl}/allProject`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        posts = response.data;
        return posts;
    }

    
    export async function getTechnology() {
        let tech = [];
        const response = await axios.get(`${baseUrl}/getTechnology`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        tech = response.data;
        return tech;
    }

    export async function getPostsLimit(limit) {
        let posts = [];
        const response = await axios.get(`${baseUrl}/allPost/${limit}`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        posts = response.data;
        return posts;
    }

    
    export async function getTeam() {
        let posts = [];
        const response = await axios.get(`${baseUrl}/getTeam`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        posts = response.data;
        return posts;
    }
  

    export async function getAbout() {
        let about = [];
        const response = await axios.get(`${baseUrl}/allAbout`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        about = response.data;
        return about;
    }

    export async function getValue() {
        let val = [];
        const response = await axios.get(`${baseUrl}/allValue`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        val = response.data;
        return val;
    }

    export async function getPhoto() {
        let val = [];
        const response = await axios.get(`${baseUrl}/allPhoto`, {
            headers: {
                'Accept-Language': 'de'
            }
        });
        val = response.data;
        return val;
    }

    export async function postNews(email) {
        let news = '';
        const response = await axios.post(`${baseUrl}/newsletter`, {
            email:email
        });
        news = response.data;
        return news;
    }

    export async function postContact(nom, post_nom, email, phone, message) {
        let contact = '';
        const response = await axios.post(`${baseUrl}/contact`, {
            nom:nom,
            post_nom:post_nom,
            email:email,
            phone:phone,
            message:message
        });
        contact = response.data;
        return contact;
    }

    export async function onePost(slug, id) {
        let post = '';
        const response = await axios.get(`${baseUrl}/onePost/${id}/${slug}`, {
            headers: {
                'Accept-Language': 'de'
            },
            params: {
                per_page: 3
              }
               
        });
        post = response.data;
        return post;
    }

    export async function oneService(slug, id) {
        let post = '';
        const response = await axios.get(`${baseUrl}/oneService/${id}/${slug}`, {
            headers: {
                'Accept-Language': 'de'
            },
            params: {
                per_page: 3
              }
               
        });
        post = response.data;
        return post;
    }

    export async function allPostCategory(id) {
        let post = '';
        const response = await axios.get(`${baseUrl}/allPostCategory/${id}`, {
            headers: {
                'Accept-Language': 'de'
            },
            params: {
                per_page: 3
              }
               
        });
        post = response.data;
        return post;
    }
    export async function oneProject(slug, id) {
        let post = '';
        const response = await axios.get(`${baseUrl}/oneProject/${id}/${slug}`, {
            headers: {
                'Accept-Language': 'de'
            },
            params: {
                per_page: 3
              }
               
        });
        post = response.data;
        return post;
    }

    