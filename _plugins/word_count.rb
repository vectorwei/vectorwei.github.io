module Jekyll
  module WordCount
    def count_words(input)
      # 移除HTML标签
      input = input.to_s.gsub(/<\/?[^>]*>/, '')
      
      # 计算英文单词（以空格分隔）
      eng_word_count = input.split.length
      
      # 计算中文字符（使用正则表达式匹配中文字符）
      cjk_count = input.scan(/[\u4e00-\u9fff]/).length
      
      # 返回总数（中文字符 + 英文单词）
      eng_word_count + cjk_count
    end
  end
end

Liquid::Template.register_filter(Jekyll::WordCount) 