import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/layout/HomeView.vue'),
      children: [
        // 首页
        {
          path: '/',
          name: 'Index',
          component: () => import('@/views/Index.vue')
        },
        // 论坛交流
        {
          path: '/forum',
          name: 'Forum',
          component: () => import('@/views/Forum.vue')
        },
        // 系统资讯
        {
          path: '/news',
          name: 'News',
          component: () => import('@/views/News.vue')
        },
        // 个人中心
        {
          path: '/user',
          name: 'User',
          component: () => import('@/views/User.vue')
        },
        // 问题反馈
        {
          path: '/feedback',
          name: 'Feedback',
          component: () => import('@/views/Feedback.vue')
        },
        // 后台管理
        {
          path: '/admin',
          name: 'Admin',
          component: () => import('@/views/Admin.vue')
        }
      ]
    },
    // 管理员界面
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/admin/layout/AdminView.vue'),
      redirect: '/admin/user',
      // 个人中心、用户管理、管理员管理、论坛类别管理、论坛帖子管理、系统资讯管理、问题反馈管理
      children: [
        // 个人中心
        {
          path: '/admin/user',
          name: 'AdminUser',
          component: () => import('@/views/admin/User.vue')
        },
        // 用户管理
        {
          path: '/admin/userManage',
          name: 'AdminUserManage',
          component: () => import('@/views/admin/UserManage.vue')
        },
        // 管理员管理
        {
          path: '/admin/adminManage',
          name: 'AdminAdminManage',
          component: () => import('@/views/admin/AdminManage.vue')
        },
        // 论坛类别管理
        {
          path: '/admin/forumTypeManage',
          name: 'AdminForumTypeManage',
          component: () => import('@/views/admin/ForumTypeManage.vue')
        },
        // 论坛帖子管理
        {
          path: '/admin/forumManage',
          name: 'AdminForumManage',
          component: () => import('@/views/admin/ForumManage.vue')
        },
        // 系统资讯管理
        {
          path: '/admin/newsManage',
          name: 'AdminNewsManage',
          component: () => import('@/views/admin/NewsManage.vue')
        },
        // 问题反馈管理
        {
          path: '/admin/feedbackManage',
          name: 'AdminFeedbackManage',
          component: () => import('@/views/admin/FeedbackManage.vue')
        }
      ]
    }
  ]
});

export default router;
