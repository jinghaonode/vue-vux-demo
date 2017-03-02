<template>
  <div class="article-box" :style="{minHeight: minHeight + 50 + 'px'}">
    <div class="head-box">
      <h2 class="head-title" v-text="article.title">
      </h2>
      <div class="head-intro">
        <div class="avatar">
          <img :src="author.avatar_url" alt="headImgUrl">
        </div>
        <div class="head-middle">
          <div class="head-middle-top">
            <div class="feed-label" :class="[article.top ? 'feed-label-top' : `feed-label-other`]">
              {{article.tab | translateTab(article.top)}}
            </div>
            <span class="head-author-name" v-text="author.name"></span>
          </div>
          <div class="head-middle-bottom">

            {{article.create_at | timeAgo}}创建
            ·
            <span v-text="article.visit_count"></span>次预览
            <div class="icon-eye-open"></div>
          </div>
        </div>
        <div class="head-right" @click="onLikeThisArticle">
          <i :class="[article.is_collect ? 'icon-heart' : 'icon-heart-empty']"></i>
        </div>
      </div>
    </div>

    <div class="content-box markdown-body" v-html="article.content">
    </div>

    <div class="comment-box">
      <div class="comment-title">
        {{reply_count}} 条回复
      </div>
      <div class="comment-li" v-for="(c, index) in displayCommentList">
        <div class="comment-head">
          <router-link :to="{name: 'user', query: { id: c.author.loginname }}">
            <div class="avatar">
              <img :src="c.author.avatar_url" alt="headImgUrl">
            </div>
          </router-link>
          <div class="comment-middle">
            <div class="comment-middle-top" v-text="c.author.loginname">
            </div>
            <div class="comment-middle-bottom">
              <span>{{index + 1}}楼</span> · {{c.create_at | timeAgo}}
            </div>
          </div>
          <div class="comment-right">
            <div @click="onLikeThisComment(c.id, index)" style="display: flex;"
                 :class="{ 'active': index < 60 && c.ups.indexOf($store.getters.loginInfo.id) >= 0}">
              <i class="icon-thumbs-up"></i>
              <span v-text="c.ups.length"></span>
            </div>
            <i class="icon-reply" @click="onReplyComment(c.id, c.author.loginname, index)"></i>
          </div>
        </div>
        <div class="comment-content markdown-body" v-html="c.content">
        </div>
      </div>
    </div>

    <popup v-model="popup.show" @on-hide="popup.show = false">
      <div class="popup-editor-box">
        <x-input class="weui_vcode weui_text_left" style="text-align: left" v-model="popup.content"
                 :placeholder="popup.placeholder" ref="input">
          <x-button slot="right" type="primary" @click.native="onSendComment">发送</x-button>
        </x-input>
      </div>
    </popup>

    <div class="ext-btn-reply" :class="{'hide': !showExtBtnReply}" @click="onReplyArticle">
      <i class="icon-reply"></i>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return { 
      }
    },
    activated(){
      this.page = 1
      this.onFetchDetail()
    },
    deactivated () {
      window.onscroll = null
    },
    methods: {

    }
  }
</script>
<style>
 
</style>
