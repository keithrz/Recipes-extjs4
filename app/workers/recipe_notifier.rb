class RecipeNotifier
  @queue = :recipes_queue

  def self.perform(recipe_id)
    recipe = Recipe.find(recipe_id)
    puts "Async job performed"
    puts recipe 
    puts "Async job finished"
  end
end
