module ApplicationHelper
  
  # to_ingrid_json originally taken
  # from https://github.com/ahe/2dc_jqgrid
  #        --> lib / 2dc_jqgrid.rb
  # modifications have been made since
  
  include ActionView::Helpers::JavaScriptHelper
  
  def to_jqgrid_json(data, attr_whitelist, current_page, per_page, total)
    json = %Q({"page":"#{current_page}","total":#{total/per_page.to_i+1},"records":"#{total}")
    if total > 0
      json << %Q(,"rows":[)
      data.each do |elem|
        elem.id ||= index(elem)
        json << "{"
        couples = elem.attributes
        couples.each {|key, value|
          if attr_whitelist.include?(key)
            json << %Q("#{key}":"#{value}",)
          end
        }
        json.chop! << "},"
      end
      json.chop! << "]}"
    else
      json << "}"
    end
  end
  
end
